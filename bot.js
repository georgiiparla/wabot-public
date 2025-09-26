const services = require("./services");
const { messages } = require("./models");

const sendMessage = services.SendMessageWhatsApp;

const buttonHandlers = {
    "btn_menu": (number) => sendMessage(messages.menu.to(number)),
    "btn_company_info": (number) => sendMessage(messages.aboutUs.to(number)),
    "btn_websites": (number) => sendMessage(messages.websiteLink.to(number)),
    "btn_socials": (number) => sendMessage(messages.socialsText.to(number)),
    "btn_activities_info": (number) => sendMessage(messages.ourServices.to(number)),
    "btn_all_activities": (number) => sendMessage(messages.allActivities.to(number)),
    "btn_packages": async (number) => {
        await sendMessage(messages.packagesDocument.to(number));
        await sendMessage(messages.bmxOffer.to(number));
        await sendMessage(messages.paviOffer.to(number));
    },
    "btn_lasertag": (number) => sendMessage(messages.laserTag.to(number)),
    "btn_attractions": (number) => sendMessage(messages.attractions.to(number)),
    "btn_pictures_attractions": (number) => sendMessage(messages.attrPhotos.to(number)),
    "btn_indoor": (number) => sendMessage(messages.indoorLt.to(number)),
    "btn_outdoor": (number) => sendMessage(messages.outdoorLt.to(number)),
    "btn_cybermaxx": (number) => sendMessage(messages.cybermaxx.to(number)),
    "btn_lasermaxx": (number) => sendMessage(messages.lasermaxx.to(number)),
    "btn_pictures_cybermaxx": (number) => sendMessage(messages.cmxPhotos.to(number)),
    "btn_pictures_lasermaxx": (number) => sendMessage(messages.lmxPhotos.to(number)),
    "btn_battlemaxx_kordin": (number) => sendMessage(messages.battlemaxxPrison.to(number)),
    "btn_battlemaxx_ghaxaq": (number) => sendMessage(messages.battlemaxxForest.to(number)),
    "btn_pictures_kordin": (number) => sendMessage(messages.bmxPrisonPhotos.to(number)),
    "btn_pictures_ghaxaq": (number) => sendMessage(messages.bmxGhaxaqPhotos.to(number)),
    "btn_contacts_info": async (number) => {
        await sendMessage(messages.operatorChat.to(number));
        await sendMessage(messages.contactUs.to(number));
    },
    "btn_price_book": (number) => sendMessage(messages.booking.to(number)),
};

function getMessagePayload(jsonData) {
    try {
        return jsonData.entry[0].changes[0].value.messages[0];
    } catch (e) {
        return null;
    }
}

async function processMessage(jsonData) {
    const message = getMessagePayload(jsonData);
    if (!message) {
        console.log("Webhook received but no message found.");
        return;
    }

    const number = message.from;

    switch (message.type) {
        case "interactive":
            if (message.interactive.type === "button_reply") {
                const buttonId = message.interactive.button_reply.id;
                const handler = buttonHandlers[buttonId];
                if (handler) {
                    await handler(number);
                } else {
                    console.log(`No handler found for button ID: ${buttonId}`);
                }
            }
            break;

        case "text":
            // For any text message, send the main menu
            await sendMessage(messages.menu.to(number));
            break;

        case "button":
            const buttonText = message.button.text;
            if (buttonText === "About Us") await sendMessage(messages.aboutUs.to(number));
            if (buttonText === "Our Services") await sendMessage(messages.ourServices.to(number));
            if (buttonText === "Chat with us") {
                await sendMessage(messages.operatorChat.to(number));
                await sendMessage(messages.contactUs.to(number));
            }
            break;

        default:
            console.log(`Unknown message type received: ${message.type}`);
    }
}

module.exports = {
    processMessage
};