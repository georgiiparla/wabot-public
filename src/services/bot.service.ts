import { MenuService } from './menu.service';
import { WhatsAppService } from './whatsapp.service';

type WhatsAppWebhookPayload = any;

export class BotService {
    // Use dependency injection
    constructor(
        private menuService: MenuService,
        private whatsappService: WhatsAppService
    ) {}

    /**
     * Processes an incoming WhatsApp webhook payload.
     */
    public async processMessage(jsonData: WhatsAppWebhookPayload): Promise<void> {
        try {
            const message = jsonData.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
            if (!message) {
                // Not a message event, ignore
                return;
            }

            const type = message.type;
            const number = message.from;
            let triggerId: string | null = null;

            switch (type) {
                case 'interactive':
                    if (message.interactive.type === 'button_reply') {
                        triggerId = message.interactive.button_reply.id;
                    }
                    break;
                case 'text':
                    // Any text message resets to the main menu
                    triggerId = 'main_menu';
                    break;
                // --- LEGACY 'button' CASE REMOVED ---
                default:
                    console.log(`Ignoring unknown message type: ${type}`);
                    return;
            }

            if (triggerId) {
                // Fetch all payloads (could be 1 or more)
                const payloads = await this.menuService.getMessagePayloads(triggerId, number, 0);

                // Send them in order
                for (const payload of payloads) {
                    // Add a small delay for a more natural feel
                    await new Promise(resolve => setTimeout(resolve, 500));
                    await this.whatsappService.send(payload);
                }
            }
        } catch (error) {
            console.error('Error processing message:', error);
        }
    }
}