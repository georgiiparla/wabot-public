import 'dotenv/config';

export const config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    uploadPath: process.env.UPLOAD_PATH || '/tmp/wabot-uploads',

    // WhatsApp
    whatsapp: {
        verifyToken: process.env.WHATSAPP_VERIFY_TOKEN || '',
        apiToken: process.env.WHATSAPP_API_TOKEN || '',
        apiVersion: process.env.WHATSAPP_API_VERSION || 'v18.0',
        phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || '',
    },

    // Database
    databaseUrl: process.env.DATABASE_URL || '',
};