import { PrismaClient } from '@prisma/client';
import { InteractiveMessage, Button } from "@prisma/client";
import * as payloads from '../models/whatsapp.payloads';

// Define a type for the message data we fetch
type MessageWithButtons = InteractiveMessage & { buttons: Button[] };

export class MenuService {
    // Use dependency injection for Prisma
    constructor(private prisma: PrismaClient) {}

    /**
     * Fetches and builds all message payloads for a given trigger.
     * @param triggerId The button ID that was pressed (e.g., "btn_company_info") or a default ("main_menu").
     * @param number The recipient's phone number.
     * @param depth The current recursion depth, to prevent infinite loops.
     * @returns An array of message objects to be sent.
     */
    public async getMessagePayloads(
        triggerId: string,
        number: string,
        depth = 0 // Add depth parameter
    ): Promise<object[]> {

        // Stop recursion if depth limit is exceeded
        if (depth > 3) {
            console.error(`Recursion depth exceeded for triggerId: ${triggerId}`);
            return [
                payloads.SampleText(
                    number,
                    'Sorry, there was an error processing your request. Please try again later.'
                ),
            ];
        }

        // 1. Find the message ID to send
        const messageId = await this.findMessageIdForTrigger(triggerId);

        // 2. Fetch the message and its buttons from the DB
        const msgData = await this.prisma.interactiveMessage.findUnique({
            where: { id: messageId },
            include: { buttons: { orderBy: { id: 'asc' } } }, // Order buttons consistently
        });

        if (!msgData) {
            console.error(`Database error: No message found for ID: ${messageId}`);
            return [
                payloads.SampleText(
                    number,
                    'Sorry, I had an error. Please try again.'
                ),
            ];
        }

        // 3. Build the primary payload
        const primaryPayload = this.buildPayload(msgData, number);
        const messagesToSend: object[] = [primaryPayload];

        // 4. Check for supplemental "multi-messages"
        // Only check if it's NOT an internal call (which are supplementals themselves)
        if (!triggerId.startsWith('__internal_')) {
            const supplementalPayloads = await this.getSupplementalPayloads(triggerId, number, depth);
            messagesToSend.push(...supplementalPayloads);
        }

        return messagesToSend;
    }

    /**
     * Finds the correct message ID to show based on the button/trigger ID.
     */
    private async findMessageIdForTrigger(triggerId: string): Promise<string> {
        let messageId: string | undefined;

        if (triggerId === 'main_menu') {
            messageId = 'main_menu';
        } else if (triggerId.startsWith('__internal_')) {
            // Internal triggers map directly to a message ID
            // e.g., "__internal_bmx_offer" -> "bmx_offer"
            messageId = triggerId.substring(10);
        } else {
            // It's a standard button press, find what message it triggers
            const button = await this.prisma.button.findUnique({
                where: { id: triggerId },
                select: { triggersMessageId: true },
            });
            messageId = button?.triggersMessageId;
        }

        // Default to main_menu if no trigger is found
        if (!messageId) {
            console.warn(`No message found for trigger: ${triggerId}. Defaulting to main_menu.`);
            messageId = 'main_menu';
        }
        return messageId;
    }

    /**
     * Builds the final WhatsApp JSON payload from the database message object.
     */
    private buildPayload(msgData: MessageWithButtons, number: string): object {
        switch (msgData.type) {
            case 'BUTTONS':
                const btnMsg = new payloads.ButtonsMessage(msgData.bodyText);
                msgData.buttons.forEach((btn) => btnMsg.addButton(btn.id, btn.title));
                return btnMsg.to(number);
            case 'URL':
                const urlMsg = new payloads.URLMessage(
                    msgData.headerText,
                    msgData.bodyText
                );
                if (msgData.url && msgData.urlDisplayText) {
                    urlMsg.addURL(msgData.urlDisplayText, msgData.url);
                }
                return urlMsg.to(number);
            case 'DOCUMENT_LINK':
                if (msgData.documentUrl && msgData.documentCaption && msgData.documentFilename) {
                    return payloads.SendDocumentByLink(
                        number,
                        msgData.documentUrl,
                        msgData.documentCaption,
                        msgData.documentFilename
                    );
                }
                return payloads.SampleText(number, 'Error: Document not configured.');
            case 'TEXT':
                return payloads.SampleText(number, msgData.bodyText);
            default:
                return payloads.SampleText(number, 'Error: Message type not supported.');
        }
    }

    /**
     * Handles special cases where one button press needs to send multiple messages.
     */
    private async getSupplementalPayloads(triggerId: string, number: string, depth: number): Promise<object[]> {
        const supplementalMessages: object[] = [];

        if (triggerId === 'btn_packages') {
            // Also send the bmx and pavi offers
            supplementalMessages.push(
                (await this.getMessagePayloads('__internal_bmx_offer', number, depth + 1))[0]
            );
            supplementalMessages.push(
                (await this.getMessagePayloads('__internal_pavi_offer', number, depth + 1))[0]
            );
        } else if (triggerId === 'btn_menu_contact') {
            // Also send the operator chat link
            supplementalMessages.push(
                (await this.getMessagePayloads('__internal_operator_chat', number, depth + 1))[0]
            );
        }

        return supplementalMessages;
    }
}