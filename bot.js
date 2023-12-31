const services = require("./services")
const models = require("./models")

const sendMessage = services.SendMessageWhatsApp

// Pictures DB (updates via Postman)
const picturesIDs = {
    ghaxaq: {
        bmxgh_group: "1078390633299517",
        bmxgh_group2: "1019324105964659",
        bmxgh_guy: "1605220973635265",
        bmxgh_guy_mg: "797883088844791"
    },
    kordin: {
        bmxk_group: "326398410317727",
        bmxk_group2: "1734044077064505",
        bmxk_guy: "299812852771701",
        bmxk_guy_mg: "736581517998754"
    },
    attractions: {
        vr_guy: "1055062139114872",
        vr_girl: "341574101980142",
        sg_boy: "2079503415763000",
        sg_duo: "329086523413359",
        bumping_cars: "1389518181989769",
        bumping_cars2: "878370297113942"
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
                            sendMessage(models.website.to(number))
                            break
                        case "btn_socials":
                            sendMessage(models.socials.to(number))
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
                                "1004989973894579",
                                "Party offers for teens",
                                "Offers for teens"
                            ))
                            sendMessage(models.SendDocument(
                                number,
                                "1440439353559713",
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
                    case "Activities":
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
