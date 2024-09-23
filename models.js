// Models
function SampleText(number, text) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "text",
        "text": { // the text object
            "preview_url": false,
            "body": text
        }
    })
    return data
}

function SampleTemplate(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "template",
        "template": {
            "name": "say_hi",
            "language": {
                "code": "en_US"
            },
            "components": [
                {
                    "type": "body",
                    "parameters": [
                    ]
                }
            ]
        }
    })
    return data
}

function SendDocument(number, id, caption, fileName) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "document",
        "document": {
            "id": id,
            "caption": caption,
            "filename": fileName
        }
    })
    return data
}

function SendDocumentByLink(number, link, caption, fileName) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "document",
        "document": {
            "link": link,
            "caption": caption,
            "filename": fileName
        }
    })
    return data
}

function SendPhoto(number, link) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "image",
        "image": {
            "link": link
        }
    })
    return data
}

class ButtonsMessage {
    constructor(bodyText) {
        this.data = {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": "",
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": bodyText
                },
                "action": {
                    "buttons": []
                }
            }
        }
    }

    addButton(id, title) {
        this.data.interactive.action.buttons.push(
            {
                "type": "reply",
                "reply": {
                    "id": id,
                    "title": title
                }
            }
        )
    }

    to(number) {
        this.data.to = number
        return JSON.stringify(this.data)
    }
}

class URLMessage {
    constructor(headerText, bodyText) {
        this.data = {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": "",
            "type": "interactive",
            "interactive": {
                "type": "cta_url",

                /* Header optional */
                "header": {
                    "type": "text",
                    "text": headerText
                },

                /* Body optional */
                "body": {
                    "text": bodyText
                },

                "action": {
                    "name": "cta_url",
                    "parameters": {
                        "display_text": "",
                        "url": ""
                    }
                }
            }
        }
    }

    addURL(displayText, url) {
        this.data.interactive.action.parameters.display_text = displayText
        this.data.interactive.action.parameters.url = url
    }

    to(number) {
        this.data.to = number
        return JSON.stringify(this.data)
    }

}



const booking = new URLMessage(
    "To book online",
    "Follow the link below"
)
booking.addURL("Book online", "https://www.starwarsmalta.com/")


const websiteLink = new URLMessage(
    "MULTIMAXX Website",
    "Follow the link below"
)
websiteLink.addURL("Multimaxx", "https://www.starwarsmalta.com/")

const operatorChat = new URLMessage(
    "To chat with our operators",
    "Press the button below."
)
operatorChat.addURL("Chat online", "https://wa.me/message/BJBEEA44KRBSN1")

// const facebookLink1 = new URLMessage(
//     "👥 BATTLEMAXX Facebook",
//     "Follow the link below"
// )
// facebookLink1.addURL("BATTLEMAXX", "https://www.facebook.com/battlemaxx/")

// const facebookLink2 = new URLMessage(
//     "👥 MULTIMAXX Facebook",
//     "Follow the link below"
// )
// facebookLink2.addURL("MULTIMAXX", "https://www.facebook.com/multimaxxmalta/")

// const instagramLink = new URLMessage(
//     "📱 MULTIMAXX Instagram",
//     "Follow the link below"
// )
// instagramLink.addURL("MULTIMAXX", "https://www.instagram.com/multimaxxmalta/")


const attrPhotos = new URLMessage(
    "Photos from our venues",
    "Follow the link below"
)
attrPhotos.addURL("See pictures", "https://www.instagram.com/multimaxxmalta/")

const bmxPrison = new URLMessage(
    "Photos from BATTLEMAXX Lasertag",
    "Follow the link below"
)
bmxPrison.addURL("See pictures", "https://www.facebook.com/battlemaxx/")

const bmxGhaxaq = new URLMessage(
    "Photos from BATTLEMAXX Lasertag",
    "Follow the link below"
)
bmxGhaxaq.addURL("See pictures", "https://www.facebook.com/battlemaxx/")

const cmx = new URLMessage(
    "Photos from our venues",
    "Follow the link below"
)
cmx.addURL("See pictures", "https://imgur.com/a/PWpoQqT")

const lmx = new URLMessage(
    "Photos from our venues",
    "Follow the link below"
)
lmx.addURL("See pictures", "https://www.instagram.com/multimaxxmalta/")

const bmxOffer = new URLMessage(
    "Check all latest flash offers",
    "Follow the link below"
)
bmxOffer.addURL("Use offer", "https://www.starwarsmalta.com/#comp-m0uz179u")

const paviOffer = new URLMessage(
    "Special offer in PAVI",
    "Follow the link below"
)
paviOffer.addURL("Use offer", "https://www.instagram.com/p/C8-FAu4OEOw/?utm_source=ig_web_copy_link")


// btn_menu
const menu = new ButtonsMessage("*Hi! I'm a Multimaxx bot.* 📌 Here you can get more information about activities we provide, photos from our venues and details regarding party packages. Use the buttons below to navigate through the menu.")
menu.addButton("btn_company_info", "🌐 About Us")
menu.addButton("btn_activities_info", "🎉 Our Services")
menu.addButton("btn_contacts_info", "☎️ Chat with us")



// "btn_company_info", "🌐 About Us"
const aboutUs = new ButtonsMessage("Multimaxx is an entertainment company which is based on 🔫 Laser tag. Our locations feature urban battlefields, outdoor terrains for realistic experience (BATTLEMAXX), and indoor futuristic arenas (LASERMAXX, CYBERMAXX).\nBut that's not all. Explore 🎮 VIRTUALMAXX for a 360-degree virtual experience, 🚗💥 BUMPERMAXX to challenge your driving skills with electric bumper cars, and 🕹️ ARCADMAXX for classic arcade fun!\n🎁 Tailored packages await for birthdays, camps, youth groups, schools, corporate team-building, and private events. You can get more information via this online bot, or from our website and socials.")
aboutUs.addButton("btn_websites", "🔗 Website")
aboutUs.addButton("btn_socials", "📌 Our Socials")
aboutUs.addButton("btn_menu", "📑 Back to Menu")



// "btn_activities_info", "🎉 Our Services"
const ourServices = new ButtonsMessage("🌟 To discover the range of activities we offer, press the 🚀 *Activities* button\n\nTo explore offers and promotions, please, press the 🎁 *Deals & Promotions* button.\n\n*Attention!*\nIf you wish to book something from 🎁 *Deals & Promotions*, kindly wait for our call or call us back, and we will book a party for you.\nYou also can book it online by following this link:\n\nwww.starwarsmalta.com")
ourServices.addButton("btn_all_activities", "🚀Activities")
ourServices.addButton("btn_packages", "🎁Deals & Promotions")
ourServices.addButton("btn_menu", "📑 Back to Menu")



// "btn_contacts_info", "☎️ Contact Us"
const contactUs = new ButtonsMessage("🚀 MULTIMAXX, Level 4, Bay Street Complex, Saint Julian's, Malta (LASERMAXX indoor laser tag, Virtual Reality, Shooting Gallery, Arcade Machines and Private parties)\n⚔️ BATTLEMAXX (outdoor laser tag in Paola and Għaxaq)\n📞 +35699177777\n📧 info@starwarsmalta.com\n\n🌐 CYBERMAXX, Level 2, Main Street Complex, Paola, Malta (Indoor laser tag)\n📞 +35627627270\n📧 info@starwarsmalta.com\n\n🎉 MULTIMAXX & SQUARE, PAVI Shopping Complex, Ħal Qormi (Bumping cars, Virtual Reality, Shooting Gallery, Arcade Machines and Private parties)\n📞 +35699177777\n📧 info@starwarsmalta.com")
contactUs.addButton("btn_menu", "📑 Back to Menu")



// "btn_all_activities", "🚀 All activities"
const allActivities = new ButtonsMessage("🌟 To obtain the information about our laser tag and book a game, press the 🔫 *Laser Tag* button.\n\nTo get details about other activities such as Arcade Machines, Virtual Reality and Bumper Cars, kindly press the 🕹️ *Attractions* button.")
allActivities.addButton("btn_lasertag", "🔫 Laser Tag")
allActivities.addButton("btn_attractions", "🕹️ Attractions")
allActivities.addButton("btn_activities_info", "⬅️ Back")



// "btn_lasertag", "🔫 Laser Tag"
const laserTag = new ButtonsMessage("🤖 Choose the type!")
laserTag.addButton("btn_indoor", "🏢 Indoor")
laserTag.addButton("btn_outdoor", "🌳 Outdoor")
laserTag.addButton("btn_all_activities", "⬅️ Back")



// "btn_attractions", "🕹️ Attractions"
const attractions = new ButtonsMessage("🕶️ Virtual Reality - Our head-mounted displays allow you to sit down and feel like the protagonist in incredible cinematic adventures. Once you put on the Oculus Rift, you're transported into another dimension—a journey you shouldn't miss!\n**Available in Multimaxx Bay Street and Multimaxx PAVI*\n\n🎯 Shooting Gallery - Point at the ducks and pull the trigger! Our shooting gallery offers an array of different game modes to test your aiming skills. The rifle and its explosive sounds are as lifelike as it gets! Shoot your way up to that high score!\n**Available in Multimaxx Bay Street and Multimaxx PAVI*\n\n🚗💥 Bumper Cars - Spin, whirl, revolve, and rotate around MULTIMAXX's dazzling indoor Bumper Car Arena, colliding with opponents and asserting your dominance! These single-driven cars challenge your driving skills as you engage in bumper-to-bumper action against family and friends. Ready to accelerate to the max?\n**Available only in Multimaxx PAVI*")
attractions.addButton("btn_pictures_attractions", "📷 See pictures")
attractions.addButton("btn_all_activities", "⬅️ Back")



// "btn_indoor", "🏢 Indoor"
const indoorLt = new ButtonsMessage("🌟 Discover the range of the indoor Laser Tag we offer!")
indoorLt.addButton("btn_lasermaxx", "🚀 LASERMAXX")
indoorLt.addButton("btn_cybermaxx", "🌐 CYBERMAXX")
indoorLt.addButton("btn_lasertag", "⬅️ Back")



// "btn_outdoor", "🌳 Outdoor"
const outdoorLt = new ButtonsMessage("🌟 Discover the range of the outdoor Laser Tag we offer!")
outdoorLt.addButton("btn_battlemaxx_kordin", "⚔️ BMX Royal Prison")
outdoorLt.addButton("btn_battlemaxx_ghaxaq", "🏹 BMX Forest")
outdoorLt.addButton("btn_lasertag", "⬅️ Back")



// "btn_cybermaxx", "🌐 CYBERMAXX"
const cybermaxx = new ButtonsMessage("🚀 Dive into the excitement at our large and modern Laser Tag arena on Level 2, Main Street Shopping Complex, Paola!\n\n🎮 Kid's party packages and private events are ready for booking. 🎉 Don't miss out on the ultimate fun! 🔫💫")
cybermaxx.addButton("btn_price_book", "🔍👀 Book online")
cybermaxx.addButton("btn_pictures_cybermaxx", "📷 See pictures")
cybermaxx.addButton("btn_indoor", "⬅️ Back")



// "btn_lasermaxx", "🚀 LASERMAXX"
const lasermaxx = new ButtonsMessage("🌟 Immerse yourself in the thrill of our indoor Laser Tag arena on Level 4, Bay Street Complex, St.Julian's, complete with dynamic lighting, swirling fog, and high-energy music to elevate the excitement 🚀🔦🎶\n\n🎉 Explore special packages tailored for birthday parties, corporate gatherings, and private events. Make your celebrations unforgettable with us! 🎂👔🎈")
lasermaxx.addButton("btn_price_book", "🔍👀 Book online")
lasermaxx.addButton("btn_pictures_lasermaxx", "📷 See pictures")
lasermaxx.addButton("btn_indoor", "⬅️ Back")



// "btn_battlemaxx_kordin", "⚔️ BMX Royal Prison"
const battlemaxxPrison = new ButtonsMessage("🎮 Embark on thrilling new game scenarios at the spectacular location of The Royal Navy Prison, constructed in 1866! 🏰⚔️\n\n🚪 Changing rooms, toilets, and a café are at your disposal for added convenience. Join the adventure and make unforgettable memories with us!")
battlemaxxPrison.addButton("btn_price_book", "🔍👀 Book online")
battlemaxxPrison.addButton("btn_pictures_kordin", "📷 See pictures")
battlemaxxPrison.addButton("btn_outdoor", "⬅️ Back")



// "btn_battlemaxx_ghaxaq", "🏹 BMX Forest"
const battlemaxxForest = new ButtonsMessage("🌳 Embark on exhilarating new game scenarios at the expansive green area nestled in the woods in the South of Malta! 🏞️🎮\n\nJoin the adventure surrounded by nature and create lasting memories in this picturesque setting! 🌲✨")
battlemaxxForest.addButton("btn_price_book", "🔍👀 Book online")
battlemaxxForest.addButton("btn_pictures_ghaxaq", "📷 See pictures")
battlemaxxForest.addButton("btn_outdoor", "⬅️ Back")


module.exports = {
    SampleText,
    SampleTemplate,
    SendPhoto,
    SendDocument,
    SendDocumentByLink,
    operatorChat,
    booking,
    menu,
    aboutUs,
    ourServices,
    contactUs,
    websiteLink,
    allActivities,
    laserTag,
    attractions,
    indoorLt,
    outdoorLt,
    cybermaxx,
    lasermaxx,
    battlemaxxPrison,
    battlemaxxForest,
    attrPhotos,
    bmxPrison,
    bmxGhaxaq,
    cmx,
    lmx,
    bmxOffer,
    paviOffer
}
