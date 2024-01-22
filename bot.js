const services = require("./services")
const models = require("./models")

const sendMessage = services.SendMessageWhatsApp

// Pictures DB (updates via Postman)
const picturesIDs = {
    ghaxaq: {
        gh1: "https://i.imgur.com/5XUSt5Y.jpg",
        gh2: "https://i.imgur.com/bZSCPJN.jpg",
        gh3: "https://i.imgur.com/CNeCiYq.jpg"
    },
    kordin: {
        bm1: "https://i.imgur.com/GNFz9hi.jpg",
        bm2: "https://i.imgur.com/W6CcOtz.jpg",
        bm3: "https://i.imgur.com/z2h0JpZ.jpg"
    },
    attractions: {
        vr1: "https://i.imgur.com/LvChGQf.jpg",
        arc1: "https://i.imgur.com/WRxk5Ji.jpg",
        sg1: "https://i.imgur.com/cismCIT.jpg",
        bc1: "https://i.imgur.com/jVK3hC9.jpg",
        pavi1: "https://i.imgur.com/KlrJhtG.jpg"
    },
    lasermaxx: {
        lm1: "https://i.imgur.com/mrxst24.jpg"
    },
    cybermaxx: {
        cm: "https://i.imgur.com/SCBj8Fi.jpg'"
    }
}

function processMessage(jsonData) {
    if (jsonData.entry[0].changes[0].value.messages) {
        const type = jsonData.entry[0].changes[0].value.messages[0].type;
        const number = jsonData.entry[0].changes[0].value.messages[0].from;
        const name = jsonData.entry[0].changes[0].value.contacts[0].profile.name;

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
                            sendMessage(models.facebookLink1.to(number))
                            sendMessage(models.facebookLink2.to(number))
                            sendMessage(models.instagramLink.to(number))
                            break
                        // 1.2 Our Services -> 1.2.1 All activities | 1.2.2 Party packages
                        case "btn_activities_info":
                            sendMessage(models.ourServices.to(number))
                            break
                        case "btn_all_activities":
                            sendMessage(models.allActivities.to(number))
                            break
                        case "btn_packages":
                            sendMessage(models.SendDocument(
                                number,
                                "898958845101413",
                                "Party offers for teens",
                                "Offers for teens"
                            ))
                            sendMessage(models.SendDocument(
                                number,
                                "24427895746855159",
                                "Party offers for kids (4-12 years old)",
                                "Offers for kids"
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
                            for (let picture in picturesIDs.attractions) {
                                sendMessage(models.SendPhoto(number, picturesIDs.attractions[picture]))
                            }
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
                            for (let picture in picturesIDs.cybermaxx) {
                                sendMessage(models.SendPhoto(number, picturesIDs.cybermaxx[picture]))
                            }
                            break
                        case "btn_pictures_lasermaxx":
                            for (let picture in picturesIDs.lasermaxx) {
                                sendMessage(models.SendPhoto(number, picturesIDs.lasermaxx[picture]))
                            }
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
                            for (let picture in picturesIDs.kordin) {
                                sendMessage(models.SendPhoto(number, picturesIDs.kordin[picture]))
                            }
                            break
                        case "btn_pictures_ghaxaq":
                            for (let picture in picturesIDs.ghaxaq) {
                                sendMessage(models.SendPhoto(number, picturesIDs.ghaxaq[picture]))
                            }
                            break
                        // 1.3 Contact Us
                        case "btn_contacts_info":
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
                    case "Contact Us":
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
