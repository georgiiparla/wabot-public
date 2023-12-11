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
                    "text": "Just, follow the link below:"
                },

                /* Body optional */
                "body": {
                    "text": "🔍🌐 Obtain more details and, if you wish, secure your spot online!"
                },

                "action": {
                    "name": "cta_url",
                    "parameters": {
                        "display_text": "More info",
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

function SampleActivityButtons(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "🌟 Discover the range of activities we offer!"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_lasertag",
                                "title": "🔫 Laser Tag"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_packages",
                                "title": "🎁 Party packages"
                            }
                        },
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

function SampleLaserTagButtons(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "🤖 Choose the type!"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_indoor",
                                "title": "🏢 Indoor"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_outdoor",
                                "title": "🌳 Outdoor"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_back_activities",
                                "title": "⬅️ Back"
                            }
                        }
                    ]
                }
            }
        }
    )
    return data
}

function SampleIndoorLTButtons(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "🌟 Discover the range of the indoor Laser Tag we offer!"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_lasermaxx",
                                "title": "🚀 LASERMAXX"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_cybermaxx",
                                "title": "🌐 CYBERMAXX"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_back_laser_locs",
                                "title": "⬅️ Back"
                            }
                        }
                    ]
                }
            }
        }
    )
    return data
}

function SampleCyberMaxxButtons(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "🚀 Dive into the excitement at our large and modern Laser Tag arena on Level 2, Main Street Shopping Complex, Paola!\n\n🎮 Kid's party packages and private events are ready for booking. 🎉 Don't miss out on the ultimate fun! 🔫💫"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_price_book",
                                "title": "🔍👀 More"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_back_laser_indoor",
                                "title": "⬅️ Back"
                            }
                        }
                    ]
                }
            }
        }
    )
    return data
}

function SampleLaserMaxxButtons(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "🌟 Immerse yourself in the thrill of our indoor Laser Tag arena on Level 4, Bay Street Complex, St.Julian's, complete with dynamic lighting, swirling fog, and high-energy music to elevate the excitement 🚀🔦🎶\n\n🎉 Explore special packages tailored for birthday parties, corporate gatherings, and private events. Make your celebrations unforgettable with us! 🎂👔🎈"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_price_book",
                                "title": "🔍👀 More"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_back_laser_indoor",
                                "title": "⬅️ Back"
                            }
                        }
                    ]
                }
            }
        }
    )
    return data
}

function SampleOutdoorLTButtons(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "🌟 Discover the range of the outdoor Laser Tag we offer!\n\nMore about BMX only https://battlemaxx.com/"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_battlemaxx_kordin",
                                "title": "⚔️ BMX Royal Prison"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_battlemaxx_ghaxaq",
                                "title": "🏹 BMX Forest"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_back_laser_locs",
                                "title": "⬅️ Back"
                            }
                        }
                    ]
                }
            }
        }
    )
    return data
}

function SampleBattleMaxxButtons1(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "🎮 Embark on thrilling new game scenarios at the spectacular location of The Royal Navy Prison, constructed in 1866! 🏰⚔️\n\n🚪 Changing rooms, toilets, and a café are at your disposal for added convenience. Join the adventure and make unforgettable memories with us!"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_price_book",
                                "title": "🔍👀 More"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_back_laser_outdoor",
                                "title": "⬅️ Back"
                            }
                        }
                    ]
                }
            }
        }
    )
    return data
}

function SampleBattleMaxxButtons2(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "🌳 Embark on exhilarating new game scenarios at the expansive green area nestled in the woods in the South of Malta! 🏞️🎮\n\nJoin the adventure surrounded by nature and create lasting memories in this picturesque setting! 🌲✨"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_price_book",
                                "title": "🔍👀 More"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "btn_back_laser_outdoor",
                                "title": "⬅️ Back"
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
    SampleContactButtons,
    SampleActivityButtons,
    SampleLaserTagButtons,
    SampleIndoorLTButtons,
    SampleCyberMaxxButtons,
    SampleLaserMaxxButtons,
    SampleBattleMaxxButtons1,
    SampleBattleMaxxButtons2,
    SampleOutdoorLTButtons
}
