// Models

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

function SendPhoto(number, id) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "image",
        "image": {
            "id": id
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
    "🔍🌐 To book online",
    "Follow the link below"
)
booking.addURL("Book online", "https://www.starwarsmalta.com/book-online")



// btn_menu
const menu = new ButtonsMessage("*Nice to see you! 👋*\n🤖 I'm your Multimaxx chatbot. If you're keen on exploring the range of activities we have and want to book them online, go ahead and navigate through the buttons below 🌟🎉")
menu.addButton("btn_company_info", "🌐 About Us")
menu.addButton("btn_activities_info", "🎉 Our Services")
menu.addButton("btn_contacts_info", "☎️ Contact Us")



// "btn_company_info", "🌐 About Us"
const aboutUs = new ButtonsMessage("🎉 Immerse yourself in an epic laser tag adventure at MULTIMAXX! Our realistic locations feature urban battlefields, futuristic arenas, and outdoor terrains for an authentic experience.\n\nBut that's not all! 🚀 Explore VIRTUALMAXX for a mind-blowing 360-degree virtual experience and 🕹️ ARCADMAXX for classic arcade fun!\n\n🎁 Tailored packages await for birthdays, camps, youth groups, schools, corporate team-building, and private events.\n\nDon't miss out on the excitement! Join us at MULTIMAXX for an unforgettable entertainment experience! 🚀🔫🎮")
aboutUs.addButton("btn_websites", "🔗 Website")
aboutUs.addButton("btn_socials", "📌 Our Socials")
aboutUs.addButton("btn_menu", "📑 Back to Menu")



// "btn_activities_info", "🎉 Our Services"
const ourServices = new ButtonsMessage("🌟 To discover the range of activities we offer, press the 🚀 *All activities* button\n\nTo explore party packages, please, press the 🎁 *Party packages* button. Just let you know that if you wish to book something from the party packages, kindly wait for our call.\n\n")
ourServices.addButton("btn_all_activities", "🚀 All activities")
ourServices.addButton("btn_packages", "🎁 Party packages")
ourServices.addButton("btn_menu", "📑 Back to Menu")



// "btn_contacts_info", "☎️ Contact Us"
const contactUs = new ButtonsMessage("🚀 Ready for laser tag action? Join us at LASERMAXX, Level 4, Bay Street Complex, Saint Julian's, Malta! 🎯 Contact us at info@starwarsmalta.com or give us a ring at +35699177777.\n\n🌐 CYBERMAXX awaits at Level 2, Main Street Complex, Paola, Malta! Dive into futuristic battles with us. 🤖 Reach out at info@starwarsmalta.com or call us at +35627627270.\n\n⚔️ BATTLEMAXX, the ultimate showdown! Connect with us at info@starwarsmalta.com or dial +35699177777 for outdoor laser tag experiences. 🏰 Join the battle!")
contactUs.addButton("btn_menu", "📑 Back to Menu")



// "btn_websites", "🔗 Website"
const website = new ButtonsMessage("www.starwarsmalta.com")
website.addButton("btn_company_info", "⬅️ Back")



// "btn_socials", "📌 Our Socials"
const socials = new ButtonsMessage("👥 Facebook:\nwww.facebook.com/battlemaxx\nwww.facebook.com/multimaxxmalta\n\n📱 Instagram:\nwww.instagram.com/multimaxxmalta")
socials.addButton("btn_company_info", "⬅️ Back")



// "btn_all_activities", "🚀 All activities"
const allActivities = new ButtonsMessage("🌟 To obtain the information about our laser tag and book a game, kindly press the 🔫 *Laser Tag* button.\n\nTo get details about other activities such as Arcade Machines, Virtual Reality and Bumper Cars, kindly press the 🕹️ *Attractions* button.")
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
const outdoorLt = new ButtonsMessage("🌟 Discover the range of the outdoor Laser Tag we offer!\n\nMore about BMX only www.battlemaxx.com")
outdoorLt.addButton("btn_battlemaxx_kordin", "⚔️ BMX Royal Prison")
outdoorLt.addButton("btn_battlemaxx_ghaxaq", "🏹 BMX Forest")
outdoorLt.addButton("btn_lasertag", "⬅️ Back")



// "btn_cybermaxx", "🌐 CYBERMAXX"
const cybermaxx = new ButtonsMessage("🚀 Dive into the excitement at our large and modern Laser Tag arena on Level 2, Main Street Shopping Complex, Paola!\n\n🎮 Kid's party packages and private events are ready for booking. 🎉 Don't miss out on the ultimate fun! 🔫💫")
cybermaxx.addButton("btn_price_book", "🔍👀 More")
cybermaxx.addButton("btn_indoor", "⬅️ Back")



// "btn_lasermaxx", "🚀 LASERMAXX"
const lasermaxx = new ButtonsMessage("🌟 Immerse yourself in the thrill of our indoor Laser Tag arena on Level 4, Bay Street Complex, St.Julian's, complete with dynamic lighting, swirling fog, and high-energy music to elevate the excitement 🚀🔦🎶\n\n🎉 Explore special packages tailored for birthday parties, corporate gatherings, and private events. Make your celebrations unforgettable with us! 🎂👔🎈")
lasermaxx.addButton("btn_price_book", "🔍👀 More")
lasermaxx.addButton("btn_indoor", "⬅️ Back")



// "btn_battlemaxx_kordin", "⚔️ BMX Royal Prison"
const battlemaxxPrison = new ButtonsMessage("🎮 Embark on thrilling new game scenarios at the spectacular location of The Royal Navy Prison, constructed in 1866! 🏰⚔️\n\n🚪 Changing rooms, toilets, and a café are at your disposal for added convenience. Join the adventure and make unforgettable memories with us!")
battlemaxxPrison.addButton("btn_price_book", "🔍👀 More")
battlemaxxPrison.addButton("btn_pictures_kordin", "📷 See pictures")
battlemaxxPrison.addButton("btn_outdoor", "⬅️ Back")



// "btn_battlemaxx_ghaxaq", "🏹 BMX Forest"
const battlemaxxForest = new ButtonsMessage("🌳 Embark on exhilarating new game scenarios at the expansive green area nestled in the woods in the South of Malta! 🏞️🎮\n\nJoin the adventure surrounded by nature and create lasting memories in this picturesque setting! 🌲✨")
battlemaxxForest.addButton("btn_price_book", "🔍👀 More")
battlemaxxForest.addButton("btn_pictures_ghaxaq", "📷 See pictures")
battlemaxxForest.addButton("btn_outdoor", "⬅️ Back")


module.exports = {
    SampleTemplate,
    SendPhoto,
    SendDocument,
    booking,
    menu,
    aboutUs,
    ourServices,
    contactUs,
    website,
    socials,
    allActivities,
    laserTag,
    attractions,
    indoorLt,
    outdoorLt,
    cybermaxx,
    lasermaxx,
    battlemaxxPrison,
    battlemaxxForest
}
