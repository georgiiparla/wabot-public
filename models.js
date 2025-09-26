const messageContent = require('./messages.content.js');

// Base Message Builders
// These are the tools that construct the final JSON for the WhatsApp API.

function SampleText(number, text) {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "text",
        "text": { "preview_url": false, "body": text }
    });
}

function SendDocumentByLink(number, link, caption, fileName) {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document": { link, caption, "filename": fileName }
    });
}

function TemplateMessage(number, name, language) {
    return JSON.stringify({
        "messaging_product": "whatsapp", "to": number, "type": "template",
        "template": { "name": name, "language": { "code": language } }
    });
}

class ButtonsMessage {
    constructor(bodyText) {
        this.data = {
            "messaging_product": "whatsapp", "recipient_type": "individual", "to": "", "type": "interactive",
            "interactive": { "type": "button", "body": { "text": bodyText }, "action": { "buttons": [] } }
        };
    }
    addButton(id, title) {
        this.data.interactive.action.buttons.push({ "type": "reply", "reply": { id, title } });
    }
    to(number) {
        this.data.to = number;
        return JSON.stringify(this.data);
    }
}

class URLMessage {
    constructor(headerText, bodyText) {
        this.data = {
            "messaging_product": "whatsapp", "recipient_type": "individual", "to": "", "type": "interactive",
            "interactive": {
                "type": "cta_url",
                "header": { "type": "text", "text": headerText },
                "body": { "text": bodyText },
                "action": { "name": "cta_url", "parameters": { "display_text": "", "url": "" } }
            }
        };
    }
    addURL(displayText, url) {
        this.data.interactive.action.parameters.display_text = displayText;
        this.data.interactive.action.parameters.url = url;
    }
    to(number) {
        this.data.to = number;
        return JSON.stringify(this.data);
    }
}


// The Message "Engine"
// This function builds all messages from your content file.
function buildMessages(content) {
    const builtMessages = {};

    for (const key in content) {
        const item = content[key];
        let messageInstance;

        switch (item.type) {
            case 'buttons':
                messageInstance = new ButtonsMessage(item.body);
                item.buttons.forEach(btn => messageInstance.addButton(btn.id, btn.title));
                break;

            case 'url':
                messageInstance = new URLMessage(item.header, item.body);
                messageInstance.addURL(item.urlText, item.url);
                break;

            case 'text':
                messageInstance = {
                    to: (number) => SampleText(number, item.body)
                };
                break;

            case 'document':
                messageInstance = {
                    to: (number) => SendDocumentByLink(number, item.link, item.caption, item.fileName)
                };
                break;

            case 'template':
                messageInstance = {
                    to: (number) => TemplateMessage(number, item.name, item.language)
                };
                break;
        }
        builtMessages[key] = messageInstance;
    }
    return builtMessages;
}

// Build all messages on startup and export them.
const messages = buildMessages(messageContent);

module.exports = {
    messages
};