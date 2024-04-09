const services = require("./services")
const models = require("./models")

const sendMessage = services.SendMessageWhatsApp

function processMessage(jsonData) {
    if (jsonData.entry[0].changes[0].value.messages) {
        const type = jsonData.entry[0].changes[0].value.messages[0].type;
        const number = jsonData.entry[0].changes[0].value.messages[0].from;
        // const name = jsonData.entry[0].changes[0].value.contacts[0].profile.name;

        switch (type) {
            case "interactive":
                const interactive_type = jsonData.entry[0].changes[0].value.messages[0].interactive.type;
                if (interactive_type === "button_reply") {
                    const buttonId = jsonData.entry[0].changes[0].value.messages[0].interactive.button_reply.id;
                    switch (buttonId) {
                        // 1. Main Menu -> 1.1 About Us | 1.2 Our Services | 1.3 Contact Us
                        case "btn_menu":
                            sendMessage(models.menu.to(number))
                            break
                        // 1.1 About Us -> 1.1.1 Websites | 1.1.2 Our Socials
                        case "btn_company_info":
                            sendMessage(models.aboutUs.to(number))
                            break
                        case "btn_websites":
                            sendMessage(models.websiteLink.to(number))
                            break
                        case "btn_socials":
                            sendMessage(models.SampleText(number, "👥 *MULTIMAXX Facebook:*\nwww.facebook.com/multimaxxmalta\n\n📱 *MULTIMAXX Instagram:*\nwww.instagram.com/multimaxxmalta\n\n👥 *BATTLEMAXX Facebook:*\nwww.facebook.com/battlemaxx"))
                            break
                        // 1.2 Our Services -> 1.2.1 All activities | 1.2.2 Party packages
                        case "btn_activities_info":
                            sendMessage(models.ourServices.to(number))
                            break
                        case "btn_all_activities":
                            sendMessage(models.allActivities.to(number))
                            break
                        case "btn_packages":
                            // sendMessage(models.SendDocument(
                            //     number,
                            //     "1083193819461481",
                            //     "St.Julian's Baystreet",
                            //     "St.Julian's Baystreet"
                            // ))
                            // sendMessage(models.SendDocument(
                            //     number,
                            //     "948187283542199",
                            //     "Paola Mainstreet",
                            //     "Paola Mainstreet"
                            // ))
                            // sendMessage(models.SendDocument(
                            //     number,
                            //     "966304458342155",
                            //     "Qormi PAVI",
                            //     "Qormi PAVI"
                            // ))
                            // sendMessage(models.SendDocument(
                            //     number,
                            //     "730656119214857",
                            //     "BATTLEMAXX",
                            //     "BATTLEMAXX"
                            // ))
                            sendMessage(models.SendDocumentByLink(
                                number,
                                "https://www.starwarsmalta.com/_files/ugd/6ced11_c8e9bffa63764c409804608e038b5df7.pdf",
                                "BATTLEMAXX",
                                "BATTLEMAXX"
                            ))
                            sendMessage(models.SendDocumentByLink(
                                number,
                                "https://www.starwarsmalta.com/_files/ugd/6ced11_977eac0d23bd4b18afc806a9344247f7.pdf",
                                "St.Julian's Baystreet",
                                "St.Julian's Baystreet"
                            ))
                            sendMessage(models.SendDocumentByLink(
                                number,
                                "https://www.starwarsmalta.com/_files/ugd/6ced11_b19d615b6cde4bae96245d59f7511a8f.pdf",
                                "Paola Mainstreet",
                                "Paola Mainstreet"
                            ))
                            sendMessage(models.SendDocumentByLink(
                                number,
                                "https://www.starwarsmalta.com/_files/ugd/6ced11_5319695dacfa44769510833b459573a9.pdf",
                                "Qormi PAVI",
                                "Qormi PAVI"
                            ))
                            break
                        // 1.2.1 All activities -> 1.2.1.1 Laser Tag | 1.2.1.2 Attractions
                        case "btn_lasertag":
                            sendMessage(models.laserTag.to(number))
                            break
                        case "btn_attractions":
                            sendMessage(models.attractions.to(number))
                            break
                        // Attractions -> See Pictures
                        case "btn_pictures_attractions":
                            sendMessage(models.attrPhotos.to(number))
                            break
                        // 1.2.1.1 Laser Tag -> 1.2.1.1.1 Indoor | 1.2.1.1.2 Outdoor
                        case "btn_indoor":
                            sendMessage(models.indoorLt.to(number))
                            break
                        case "btn_outdoor":
                            sendMessage(models.outdoorLt.to(number))
                            break
                        // 1.2.1.1.1 Indoor -> 1.2.1.1.1.1 CYBERMAXX | 1.2.1.1.1.2 LASERMAXX
                        case "btn_cybermaxx":
                            sendMessage(models.cybermaxx.to(number))
                            break
                        case "btn_lasermaxx":
                            sendMessage(models.lasermaxx.to(number))
                            break
                        // Send pictures
                        case "btn_pictures_cybermaxx":
                            sendMessage(models.cmx.to(number))
                            break
                        case "btn_pictures_lasermaxx":
                            sendMessage(models.lmx.to(number))
                            break
                        // 1.2.1.1.2 Outdoor -> 1.2.1.1.2.1 BMX Prison | 1.2.1.1.2.2 BMX Forest
                        case "btn_battlemaxx_kordin":
                            sendMessage(models.battlemaxxPrison.to(number))
                            break
                        case "btn_battlemaxx_ghaxaq":
                            sendMessage(models.battlemaxxForest.to(number))
                            break
                        // Send pictures
                        case "btn_pictures_kordin":
                            sendMessage(models.bmxPrison.to(number))
                            break
                        case "btn_pictures_ghaxaq":
                            sendMessage(models.bmxGhaxaq.to(number))
                            break
                        // 1.3 Contact Us
                        case "btn_contacts_info":
                            sendMessage(models.operatorChat.to(number))
                            sendMessage(models.contactUs.to(number))
                            break
                        // Booking button
                        case "btn_price_book":
                            sendMessage(models.booking.to(number))
                            break
                        // If no buttons touched
                        default:
                            console.log("No buttons reaction")
                            break
                    }
                }
                break
            case "text":
                // const text = jsonData.entry[0].changes[0].value.messages[0].text.body;
                sendMessage(models.menu.to(number))
                break
            case "button":
                const buttonText = jsonData.entry[0].changes[0].value.messages[0].button.text
                switch (buttonText) {
                    case "About Us":
                        sendMessage(models.aboutUs.to(number))
                        break
                    case "Our Services":
                        sendMessage(models.ourServices.to(number))
                        break
                    case "Chat with us":
                        sendMessage(models.operatorChat.to(number))
                        sendMessage(models.contactUs.to(number))
                        break
                }
            case "default":
                console.log("Unknown message type")
        }
    }
}

module.exports = {
    processMessage
}
