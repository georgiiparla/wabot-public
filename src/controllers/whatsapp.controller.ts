import { Request, Response } from 'express';
import { config } from '../config';
import { prisma } from '../lib/prisma';
import { BotService } from '../services/bot.service';
import { MenuService } from '../services/menu.service';
import { whatsAppService } from '../services/whatsapp.service';

// --- Instantiate services ---
// A simple form of dependency injection:
const menuService = new MenuService(prisma);
const botService = new BotService(menuService, whatsAppService);

/**
 * Handles the WhatsApp webhook verification (GET request).
 */
export const verifyWebhook = async (req: Request, res: Response) => {
    try {
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (
            challenge != null &&
            token != null &&
            token === config.whatsapp.verifyToken
        ) {
            res.send(challenge);
        } else {
            res
                .status(400)
                .send(
                    '<h4 style="font-family: Helvetica, sans-serif;">GET request done! Possibly wrong token.</h4>'
                );
        }
    } catch (e) {
        console.error(e);
        res.status(500).send('Internal Server Error');
    }
};

/**
 * Handles incoming WhatsApp events (POST request).
 */
export const handleWebhookEvent = async (req: Request, res: Response) => {
    let logId = '';
    try {
        console.log('Webhook received:', JSON.stringify(req.body, null, 2));

        // Log to database
        const log = await prisma.webhookLog.create({
            data: {
                payload: req.body as any,
                status: 'RECEIVED',
            },
        });
        logId = log.id;

        // --- Use the class-based service to process ---
        await botService.processMessage(req.body);

        // Update log status
        await prisma.webhookLog.update({
            where: { id: logId },
            data: { status: 'PROCESSED' },
        });

        res.status(200).send('EVENT_RECEIVED');
    } catch (e) {
        console.error(e);
        if (logId) {
            await prisma.webhookLog
                .update({
                    where: { id: logId },
                    data: { status: 'ERROR' },
                })
                .catch(console.error); // Log update error, but don't crash
        }
        // Always send 200 to WhatsApp, even if we fail
        res.status(200).send('EVENT_RECEIVED_WITH_ERROR');
    }
};