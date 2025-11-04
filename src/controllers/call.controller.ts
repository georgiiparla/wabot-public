import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { config } from '../config';
import * as path from 'path';
import * as fs from 'fs';
import { slugify } from 'transliteration';
import { UploadedFile } from 'express-fileupload';

// Import the service and payload models
import { whatsAppService } from '../services/whatsapp.service';
import * as payloads from '../models/whatsapp.payloads';

/**
 * Helper to log any call event to the database.
 */
const logEvent = async (
    type: string,
    params: any,
    body: any,
    filePath?: string
) => {
    return prisma.callEvent.create({
        data: {
            type,
            accountId: params.accountId,
            mobile: params.mobile,
            uuid: params.uuid,
            payload: body as any,
            filePath: filePath || null,
            processedAt: new Date(),
        },
    });
};

/**
 * Handles POST for missed call data.
 */
export const handleCallData = async (req: Request, res: Response) => {
    try {
        const { accountId, mobile, uuid } = req.params;
        console.log('POST calldata', { accountId, mobile, uuid });
        console.log('json:', req.body);

        await logEvent('calldata', req.params, req.body);

        const calldata = req.body;

        // If it was a missed call, send a "say_hi" template
        if (calldata.answered === false) {
            let number = calldata.number.toString();
            if (number.length === 8) {
                number = '+356' + number; // Add country code
            }
            // Use the service to send the message
            await whatsAppService.send(payloads.SampleTemplate(number));
        }
    } catch (e) {
        console.log(e);
    }
    res.json({ status: 'OK' });
};

/**
 * Handles POST for call events.
 */
export const handleEvent = async (req: Request, res: Response) => {
    try {
        const { accountId, mobile, uuid } = req.params;
        console.log('POST event', { accountId, mobile, uuid });
        console.log('json:', req.body);

        await logEvent('event', req.params, req.body);
    } catch (e) {
        console.log('err', e);
    }
    res.json({ status: 'OK' });
};

/**
 * Generic handler for file uploads (records or logs).
 */
const handleFileUpload = async (
    req: Request,
    res: Response,
    type: 'record' | 'log'
) => {
    try {
        const { accountId, mobile, uuid } = req.params;
        const logPrefix = type === 'record' ? 'POST record' : 'POST log';
        const dirPath = type === 'record' ? '/records' : '/logs';

        console.log(logPrefix, { accountId, mobile, uuid });

        const dir = path.join(config.uploadPath, dirPath);
        await fs.promises.mkdir(dir, { recursive: true });
        console.log(`${type} path`, dir);

        if (!req.files || !req.files.file) {
            console.log('no file');
            return res.json('no file');
        }

        const file = req.files.file as UploadedFile;
        const filename = slugify(file.name, {
            lowercase: true,
            separator: '_',
        });

        const fname = path.join(dir, mobile + '_' + filename);
        console.log(`prepare copy ${type} to file`, fname);
        await file.mv(fname);
        console.log('done');

        // Log file upload to DB
        await logEvent(type, req.params, req.body, fname);
    } catch (e) {
        console.log('err:', e);
    }
    res.json({ status: 'OK' });
};

export const handleRecordUpload = (req: Request, res: Response) =>
    handleFileUpload(req, res, 'record');

export const handleLogUpload = (req: Request, res: Response) =>
    handleFileUpload(req, res, 'log');