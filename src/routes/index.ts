import { Router } from 'express';
import * as whatsapp from '../controllers/whatsapp.controller';
import * as call from '../controllers/call.controller';
import fileUpload from 'express-fileupload';

const router = Router();

// --- WhatsApp Webhook ---
router.get('/', whatsapp.verifyWebhook);
router.post('/', whatsapp.handleWebhookEvent);

// --- Call Data & Events ---
router.post('/calldata/:accountId/:mobile/:uuid', call.handleCallData);
router.post('/event/:accountId/:mobile/:uuid', call.handleEvent);

// --- File Uploads ---
const fileUploadMiddleware = fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
});

router.post(
    '/record/:accountId/:mobile/:uuid',
    fileUploadMiddleware,
    call.handleRecordUpload
);

router.post(
    '/log/:accountId/:mobile',
    fileUploadMiddleware,
    call.handleLogUpload
);

export default router;