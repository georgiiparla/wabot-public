const axios = require("axios");

const API_TOKEN = process.env.WHATSAPP_API_TOKEN;
const API_URL = process.env.WHATSAPP_API_URL;

async function SendMessageWhatsApp(data) {
    if (!API_TOKEN || !API_URL) {
        console.error("WhatsApp API token or URL is not configured. Check your .env file.");
        return;
    }

    try {
        const response = await axios.post(API_URL, data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_TOKEN}`
            }
        });
        console.log("Message sent successfully:", response.data);
    } catch (error) {
        console.error("Error sending message:", error.response ? error.response.data : error.message);
    }
}

module.exports = {
    SendMessageWhatsApp
};