// This file *only* defines the JSON structure builders.
// All content is now in the database.

// --- Text & Template Functions ---

export function SampleText(number: string, text: string) {
    return {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: number,
        type: 'text',
        text: {
            preview_url: false,
            body: text,
        },
    };
}

export function SampleTemplate(number: string) {
    return {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: number,
        type: 'template',
        template: {
            name: 'say_hi',
            language: { code: 'en_US' },
            components: [{ type: 'body', parameters: [] }],
        },
    };
}

export function SendDocumentByLink(
    number: string,
    link: string,
    caption: string,
    fileName: string
) {
    return {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: number,
        type: 'document',
        document: {
            link: link,
            caption: caption,
            filename: fileName,
        },
    };
}

// --- Message Classes ---

interface WhatsAppButton {
    type: 'reply';
    reply: {
        id: string;
        title: string;
    };
}

export class ButtonsMessage {
    private readonly data: any; // Simplified type

    constructor(bodyText: string) {
        this.data = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: '',
            type: 'interactive',
            interactive: {
                type: 'button',
                body: { text: bodyText },
                action: { buttons: [] },
            },
        };
    }

    public addButton(id: string, title: string) {
        this.data.interactive.action.buttons.push({
            type: 'reply',
            reply: { id, title },
        });
    }

    public to(number: string) {
        this.data.to = number;
        return this.data;
    }
}

export class URLMessage {
    private readonly data: any; // Simplified type

    constructor(headerText: string | null, bodyText: string) {
        this.data = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: '',
            type: 'interactive',
            interactive: {
                type: 'cta_url',
                body: { text: bodyText },
                action: {
                    name: 'cta_url',
                    parameters: { display_text: '', url: '' },
                },
            },
        };
        if (headerText) {
            this.data.interactive.header = { type: 'text', text: headerText };
        }
    }

    public addURL(displayText: string, url: string) {
        this.data.interactive.action.parameters = { display_text: displayText, url };
    }

    public to(number: string) {
        this.data.to = number;
        return this.data;
    }
}