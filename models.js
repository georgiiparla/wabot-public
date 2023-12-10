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
                    "text": "Oops! 🙈 Totally missed your call earlier. Our bad! Sorry about that! While our operators are a bit busy, why not take a moment to explore Multimaxx? Just hit those nice buttons below to start! If there's anything specific you're looking for, call us back +35699007744"
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
                    "text": `MULTIMAXX offers family entertainment venues where you always find unique activities!
                    We are specialists in Laser tag - combining the classic games of hide-and-seek and tag with a high tech twist.
                    LASERMAXX, CYBERMAXX, BATTLEMAXX any kind of laser tag for you to enjoy the most! 
                    Our multi-level arenas has dazzling lighting, swirling fog and energetic music to add to the excitement for up to 16 adult or 20 children in each game.
                    A part from Laser tag we offer plenty of other fun attractions such as VIRTUALMAXX - 360 degree virtual experience and our ARCADMAXX - to enjoy your favourite arcade experience!
                    MULTIMAXX offers special packages for birthday parties, day camps, youth groups and sports teams. Schools and other youth organizations can also experience our tailormade packages for young and active students.
                    MULTIMAXX also offers corporate team building events and private events.`
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
    SampleAboutButtons
}
