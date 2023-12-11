function SampleText(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "text",
        "text": {
            "preview_url": false,
            "body": textResponse
        }
    })
    return data
}

function SendTeenOffer(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "document",
        "document": {
            "id": "1004989973894579",
            "caption": "Party offers for teens",
            "filename": "Offers for teens"
        }
    })
    return data
}

function SendKidsOffer(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "document",
        "document": {
            "id": "1440439353559713",
            "caption": "Party offers for kids (6-12 years old)",
            "filename": "Offers for kids"
        }
    })
    return data
}

function SampleBookURLButton(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "cta_url",

                /* Header optional */
                "header": {
                    "type": "text",
                    "text": "You can book an activity online!"
                },

                /* Body optional */
                "body": {
                    "text": "Please, follow the link below:"
                },

                "action": {
                    "name": "cta_url",
                    "parameters": {
                        "display_text": "Book online",
                        "url": "https://www.starwarsmalta.com/book-online"
                    }
                }
            }
        }
    )
    return data
}

function SampleMenuButtons(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "Oops! 🙈 While our operators are a bit busy, why not take a moment to explore Multimaxx? If there's anything specific you're looking for, press \"☎️ Contact Us\""
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_company_info",
                                "title": "🌐 About Us"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_activities_info",
                                "title": "🎉 Activities"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_contacts_info",
                                "title": "☎️ Contact Us"
                            }
                        }
                    ]
                }
            }
        }
    )
    return data
}

function SampleAboutButtons(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "🎉 Immerse yourself in an epic laser tag adventure at MULTIMAXX! Our realistic locations feature urban battlefields, futuristic arenas, and outdoor terrains for an authentic experience. Specializing in LASERMAXX, CYBERMAXX, and BATTLEMAXX, our multi-level arenas offer captivating lighting, fog, and energetic music.\n\nBut that's not all! 🚀 Explore VIRTUALMAXX for a mind-blowing 360-degree virtual experience and 🎮 ARCADMAXX for classic arcade fun! 🕹️ Tailored packages await for birthdays, camps, youth groups, schools, corporate team-building, and private events.\n\nDon't miss out on the excitement! Join us at MULTIMAXX for an unforgettable entertainment experience! 🚀🔫🎮"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_menu",
                                "title": "📑 Back to Menu"
                            }
                        }
                    ]
                }
            }
        }
    )
    return data
}

function SampleContactButtons(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "🚀 Ready for laser tag action? Join us at LASERMAXX, Level 4, Bay Street Complex, Saint Julian's, Malta! 🎯 Contact us at info@starwarsmalta.com or give us a ring at +35699177777.\n\n🌐 CYBERMAXX awaits at Level 2, Main Street Complex, Paola, Malta! Dive into futuristic battles with us. 🤖 Reach out at info@starwarsmalta.com or call us at +35627627270.\n\n⚔️ BATTLEMAXX, the ultimate showdown! Connect with us at info@starwarsmalta.com or dial +35699177777 for thrilling experiences. 🎮 Join the battle!"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_menu",
                                "title": "📑 Back to Menu"
                            }
                        }
                    ]
                }
            }
        }
    )
    return data
}

module.exports = {
    SampleText,
    SendTeenOffer,
    SendKidsOffer,
    SampleMenuButtons,
    SampleBookURLButton,
    SampleAboutButtons,
    SampleContactButtons
}
