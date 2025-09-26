require('dotenv').config();
const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const useragent = require('express-useragent');
const { slugify } = require('transliteration');
const services = require("./services");
const models = require("./models");
const bot = require("./bot");

const app = express();
const router = express.Router();

app.use(express.json({ limit: '10mb' }));
app.use(useragent.express());

router.get('/', (req, res) => {
    const verifyToken = process.env.WEBHOOK_VERIFY_TOKEN;
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (challenge && token && token === verifyToken) {
        res.send(challenge);
    } else {
        res.status(400).send('<h4 style="font-family: Helvetica, sans-serif;">GET request done! Possibly wrong token.</h4>');
    }
});

router.post('/', async (req, res) => {
    try {
        console.log("Received webhook:", req.body);
        await bot.processMessage(req.body);
        res.status(200).send("EVENT_RECEIVED");
    } catch (e) {
        console.error("Error processing message:", e);
        res.status(500).send("EVENT_RECEIVED_WITH_ERROR");
    }
});

router.post('/calldata/:accountId/:mobile/:uuid', async (req, res) => {
    try {
        const { accountId, mobile, uuid } = req.params;
        const calldata = req.body;
        console.log('POST calldata', { accountId, mobile, uuid, body: calldata });

        if (calldata.answered === false || calldata.answered === true) {
            let number = calldata.number;
            // Prepend country code if number is local format
            if (number && number.length === 8) {
                number = `+356${number}`;
            }
            await services.SendMessageWhatsApp(models.messages.missedCall.to(number));
        }
    } catch (e) {
        console.error("Error in /calldata route:", e);
    }
    res.status(200).json({ status: 'OK' });
});

const fileUploadHandler = (subfolder) => async (req, res) => {
    try {
        const params = req.params;
        console.log(`POST to /${subfolder}`, params);

        if (!req.files || !req.files.file) {
            console.log('No file uploaded.');
            return res.status(400).json({ status: 'No file' });
        }

        const uploadDir = path.join(process.env.UPLOAD_PATH, subfolder);
        await fs.promises.mkdir(uploadDir, { recursive: true });

        const originalFilename = slugify(req.files.file.name, { lowercase: true, separator: '_' });
        const newFilename = `${params.mobile}_${originalFilename}`;
        const filePath = path.join(uploadDir, newFilename);

        console.log(`Saving file to: ${filePath}`);
        await req.files.file.mv(filePath);
        console.log('File saved successfully.');

    } catch (e) {
        console.error(`Error in /${subfolder} route:`, e);
    }
    res.status(200).json({ status: 'OK' });
};

const fileUploadMiddleware = fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } });

router.post('/event/:accountId/:mobile/:uuid', (req, res) => {
    console.log('POST event', { params: req.params, body: req.body });
    res.status(200).json({ status: 'OK' });
});

router.post('/record/:accountId/:mobile/:uuid', fileUploadMiddleware, fileUploadHandler('records'));
router.post('/log/:accountId/:mobile', fileUploadMiddleware, fileUploadHandler('logs'));

app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});