import axios from 'axios';
import { config } from '../config';

export class WhatsAppService {
    private readonly apiUrl: string;
    private readonly apiToken: string;

    constructor() {
        const { apiToken, apiVersion, phoneNumberId } = config.whatsapp;
        if (!apiToken || !phoneNumberId) {
            console.error('WhatsApp config (WHATSAPP_API_TOKEN or WHATSAPP_PHONE_NUMBER_ID) is missing from .env');
            throw new Error('WhatsApp configuration is incomplete.');
        }

        this.apiToken = apiToken;
        this.apiUrl = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;
    }

    /**
     * Sends a message payload to the WhatsApp API.
     * @param data The JSON payload object to send.
     */
    public async send(data: object): Promise<void> {
        try {
            console.log('Sending WhatsApp message:', JSON.stringify(data));
            const response = await axios.post(this.apiUrl, data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.apiToken}`,
                },
            });
            console.log('WhatsApp API response:', response.data);
        } catch (error) {
            console.error('Error sending WhatsApp message:');
            if (axios.isAxiosError(error)) {
                console.error('Status:', error.response?.status);
                console.error('Data:', error.response?.data);
            } else {
                console.error(error);
            }
        }
    }
}

// Export a singleton instance for easy use across the app
export const whatsAppService = new WhatsAppService();