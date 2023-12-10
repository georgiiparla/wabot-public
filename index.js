const express = require('express');
const router = express.Router();
const config = require('./config/default');
const path = require('path');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const useragent = require('express-useragent');
const { slugify } = require('transliteration');
const services = require("./services")
const models = require("./models")

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(useragent.express());

// check a token
router.get('/', async (req, res) => {
    try {
        var accessToken = "btu0lSe8fbdrHiMOza978fXK";

        // extract token testing + test token
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];
        if (challenge != null && token != null && token == accessToken) {
            res.send(challenge);
        } else {
            res.status(400).send('<h4 style="font-family: Helvetica, sans-serif;">GET request done! Possibly wrong token.</h4>');
        }
    } catch (e) {
        console.error(e); // Log the error for debugging purposes
        res.status(500).send("Internal Server Error");
    }
});

router.post('/', async (req, res) => {
    try {
        // Unpacking the message
        console.log(req.body)
        console.log(typeof req.body)
        jsonData = req.body
        const messageType = jsonData.entry[0].changes[0].value.messages[0].type
        console.log(messageType)
        // if (messageType === "button") {
        //     const number = jsonData.entry[0].changes[0].value.messages[0].context.from;
        //     const text = jsonData.entry[0].changes[0].value.messages[0].button.text;
        //     if (text === "🌐 About Us") {
        //         services.SendMessageWhatsApp(models.SampleAboutButtons(number))
        //     } else if (text === "📑 Back to Menu") {
        //         services.SendMessageWhatsApp(models.SampleMenuButtons(number))
        //     } else {
        //         console.log("No button caught")
        //     }
        // }
        res.send("EVENT_RECEIVED no error")
    } catch (e) {
        console.log(e)
        res.send("EVENT_RECEIVED with error")
    }
});

// POST when missed a call
router.post('/calldata/:accountId/:mobile/:uuid', async (req, res) => {
    try {
        const { accountId, mobile, uuid } = req.params;
        console.log('POST calldata', { accountId, mobile, uuid });
        console.log('json:', req.body);

        let calldata = JSON.parse(JSON.stringify(req.body));
        console.log(calldata)

        if (calldata.answered === false) {
            if (calldata.number.length === 8) {
                let number = "+356" + calldata.number
                services.SendMessageWhatsApp(models.SampleMenuButtons(number))
            } else {
                let number = calldata.number
                services.SendMessageWhatsApp(models.SampleMenuButtons(number))
            }
        }

    } catch (e) {
        console.log(e);
    }
    res.json({ status: 'OK' });
});

router.post('/event/:accountId/:mobile/:uuid', async (req, res) => {
    try {
        const { uuid, accountId, mobile } = req.params;
        console.log('POST event', { accountId, mobile, uuid });
        console.log('json:', req.body);
    } catch (e) {
        console.log('err', e);
    }
    res.json({ status: 'OK' });
});

router.post('/record/:accountId/:mobile/:uuid',
    fileUpload({
        limits: {
            fileSize: 50 * 1024 * 1024,
        },
    }), async (req, res) => {
        try {
            const { accountId, mobile, uuid } = req.params;
            console.log('POST record', { accountId, mobile, uuid });

            const dir = path.join(config.uploadPath, '/records');
            await fs.promises.mkdir(dir, { recursive: true });
            console.log('records path', dir);
            if (!req.files || !req.files.file) {
                console.log('no file');
                return res.json('no file');
            }
            const filename = slugify(
                req.files.file.name, {
                lowercase: true,
                separator: '_',
            });

            const fname = path.join(dir, mobile + '_' + filename);
            console.log('prepare copy record to file', fname);
            await req.files.file.mv(fname);
            console.log('done');
        } catch (e) {
            console.log('err:', e);
        }
        res.json({ status: 'OK' });
    });

router.post('/log/:accountId/:mobile',
    fileUpload({
        limits: {
            fileSize: 50 * 1024 * 1024,
        },
    }), async (req, res) => {
        try {
            const { accountId, mobile } = req.params;
            console.log('POST log:', { accountId, mobile });

            const dir = path.join(config.uploadPath, '/logs');
            await fs.promises.mkdir(dir, { recursive: true });
            console.log('logs path', dir);
            if (!req.files || !req.files.file) {
                console.log('no file');
                return res.json('no file');
            }
            const filename = slugify(
                req.files.file.name, {
                lowercase: true,
                separator: '_',
            });

            const fname = path.join(dir, mobile + '_' + filename);
            console.log('prepare copy log to file', fname);
            await req.files.file.mv(fname);
            console.log('done');
        } catch (e) {
            console.log('err:', e);
        }
        res.json({ status: 'OK' });
    });

app.use("", router)

app.listen(config.port, () => {
    console.log('start with config', config);
});

