module.exports = {
    // Each key (e.g., "menu", "aboutUs") is a unique message ID.
    // --- Template Messages ---
    missedCall: {
        type: 'template',
        name: 'say_hi',
        language: 'en_US'
    },

    // --- URL Messages ---
    booking: {
        type: 'url',
        header: "To book online",
        body: "Follow the link below",
        urlText: "Book online",
        url: "https://www.starwarsmalta.com/"
    },
    websiteLink: {
        type: 'url',
        header: "MULTIMAXX Website",
        body: "Follow the link below",
        urlText: "Multimaxx",
        url: "https://www.starwarsmalta.com/"
    },
    operatorChat: {
        type: 'url',
        header: "To chat with our operators",
        body: "Press the button below.",
        urlText: "Chat online",
        url: "https://wa.me/message/BJBEEA44KRBSN1"
    },
    attrPhotos: {
        type: 'url',
        header: "Photos from our venues",
        body: "Follow the link below",
        urlText: "See pictures",
        url: "https://www.instagram.com/multimaxxmalta/"
    },
    bmxPrisonPhotos: {
        type: 'url',
        header: "Photos from BATTLEMAXX Lasertag",
        body: "Follow the link below",
        urlText: "See pictures",
        url: "https://www.facebook.com/battlemaxx/"
    },
    bmxGhaxaqPhotos: {
        type: 'url',
        header: "Photos from BATTLEMAXX Lasertag",
        body: "Follow the link below",
        urlText: "See pictures",
        url: "https://www.facebook.com/battlemaxx/"
    },
    cmxPhotos: {
        type: 'url',
        header: "Photos from our venues",
        body: "Follow the link below",
        urlText: "See pictures",
        url: "https://imgur.com/a/PWpoQqT"
    },
    lmxPhotos: {
        type: 'url',
        header: "Photos from our venues",
        body: "Follow the link below",
        urlText: "See pictures",
        url: "https://www.instagram.com/multimaxxmalta/"
    },
    bmxOffer: {
        type: 'url',
        header: "Check all latest flash offers",
        body: "Follow the link below",
        urlText: "Use offer",
        url: "https://www.starwarsmalta.com/#comp-m0uz179u"
    },
    paviOffer: {
        type: 'url',
        header: "Special offer in PAVI",
        body: "Follow the link below",
        urlText: "Use offer",
        url: "https://www.instagram.com/p/C8-FAu4OEOw/"
    },

    // --- Text & Document Messages ---
    socialsText: {
        type: 'text',
        body: "👥 *MULTIMAXX Facebook:*\nwww.facebook.com/multimaxxmalta\n\n📱 *MULTIMAXX Instagram:*\nwww.instagram.com/multimaxxmalta\n\n👥 *BATTLEMAXX Facebook:*\nwww.facebook.com/battlemaxx"
    },
    packagesDocument: {
        type: 'document',
        link: "https://nmkfmjmgapcozfyphyvm.supabase.co/storage/v1/object/public/partyDeals/Multimaxx%20Party%20Offers%202024.pdf",
        caption: "Deals & Promotions for all locations",
        fileName: "Packages"
    },

    // --- Button Messages (Main Menu Flow) ---
    menu: {
        type: 'buttons',
        body: "*Hi! I'm a Multimaxx bot.* 📌 Here you can get more information about activities we provide, photos from our venues and details regarding party packages. Use the buttons below to navigate through the menu.",
        buttons: [
            { id: 'btn_company_info', title: '🌐 About Us' },
            { id: 'btn_activities_info', title: '🎉 Our Services' },
            { id: 'btn_contacts_info', title: '☎️ Chat with us' }
        ]
    },
    aboutUs: {
        type: 'buttons',
        body: "Multimaxx is an entertainment company which is based on 🔫 Laser tag. Our locations feature urban battlefields, outdoor terrains for realistic experience (BATTLEMAXX), and indoor futuristic arenas (LASERMAXX, CYBERMAXX).\nBut that's not all. Explore 🎮 VIRTUALMAXX for a 360-degree virtual experience, 🚗💥 BUMPERMAXX to challenge your driving skills with electric bumper cars, and 🕹️ ARCADMAXX for classic arcade fun!\n🎁 Tailored packages await for birthdays, camps, youth groups, schools, corporate team-building, and private events. You can get more information via this online bot, or from our website and socials.",
        buttons: [
            { id: 'btn_websites', title: '🔗 Website' },
            { id: 'btn_socials', title: '📌 Our Socials' },
            { id: 'btn_menu', title: '📑 Back to Menu' }
        ]
    },
    ourServices: {
        type: 'buttons',
        body: "🌟 To discover the range of activities we offer, press the 🚀 *Activities* button\n\nTo explore offers and promotions, please, press the 🎁 *Deals & Promotions* button.\n\n*Attention!*\nIf you wish to book something from 🎁 *Deals & Promotions*, kindly wait for our call or call us back, and we will book a party for you.\nYou also can book it online by following this link:\n\nwww.starwarsmalta.com",
        buttons: [
            { id: 'btn_all_activities', title: '🚀Activities' },
            { id: 'btn_packages', title: '🎁Deals & Promotions' },
            { id: 'btn_menu', title: '📑 Back to Menu' }
        ]
    },
    contactUs: {
        type: 'buttons',
        body: "🚀 MULTIMAXX, Level 4, Bay Street Complex, Saint Julian's, Malta (LASERMAXX indoor laser tag, Virtual Reality, Shooting Gallery, Arcade Machines and Private parties)\n⚔️ BATTLEMAXX (outdoor laser tag in Paola and Għaxaq)\n📞 +35699177777\n📧 info@starwarsmalta.com\n\n🌐 CYBERMAXX, Level 2, Main Street Complex, Paola, Malta (Indoor laser tag)\n📞 +35627627270\n📧 info@starwarsmalta.com\n\n🎉 MULTIMAXX & SQUARE, PAVI Shopping Complex, Ħal Qormi (Bumping cars, Virtual Reality, Shooting Gallery, Arcade Machines and Private parties)\n📞 +35699177777\n📧 info@starwarsmalta.com",
        buttons: [
            { id: 'btn_menu', title: '📑 Back to Menu' }
        ]
    },
    allActivities: {
        type: 'buttons',
        body: "🌟 To obtain the information about our laser tag and book a game, press the 🔫 *Laser Tag* button.\n\nTo get details about other activities such as Arcade Machines, Virtual Reality and Bumper Cars, kindly press the 🕹️ *Attractions* button.",
        buttons: [
            { id: 'btn_lasertag', title: '🔫 Laser Tag' },
            { id: 'btn_attractions', title: '🕹️ Attractions' },
            { id: 'btn_activities_info', title: '⬅️ Back' }
        ]
    },
    laserTag: {
        type: 'buttons',
        body: "🤖 Choose the type!",
        buttons: [
            { id: 'btn_indoor', title: '🏢 Indoor' },
            { id: 'btn_outdoor', title: '🌳 Outdoor' },
            { id: 'btn_all_activities', title: '⬅️ Back' }
        ]
    },
    attractions: {
        type: 'buttons',
        body: "🕶️ Virtual Reality - Our head-mounted displays allow you to sit down and feel like the protagonist in incredible cinematic adventures. Once you put on the Oculus Rift, you're transported into another dimension—a journey you shouldn't miss!\n**Available in Multimaxx Bay Street and Multimaxx PAVI*\n\n🎯 Shooting Gallery - Point at the ducks and pull the trigger! Our shooting gallery offers an array of different game modes to test your aiming skills. The rifle and its explosive sounds are as lifelike as it gets! Shoot your way up to that high score!\n**Available in Multimaxx Bay Street and Multimaxx PAVI*\n\n🚗💥 Bumper Cars - Spin, whirl, revolve, and rotate around MULTIMAXX's dazzling indoor Bumper Car Arena, colliding with opponents and asserting your dominance! These single-driven cars challenge your driving skills as you engage in bumper-to-bumper action against family and friends. Ready to accelerate to the max?\n**Available only in Multimaxx PAVI*",
        buttons: [
            { id: 'btn_pictures_attractions', title: '📷 See pictures' },
            { id: 'btn_all_activities', title: '⬅️ Back' }
        ]
    },
    indoorLt: {
        type: 'buttons',
        body: "🌟 Discover the range of the indoor Laser Tag we offer!",
        buttons: [
            { id: 'btn_lasermaxx', title: '🚀 LASERMAXX' },
            { id: 'btn_cybermaxx', title: '🌐 CYBERMAXX' },
            { id: 'btn_lasertag', title: '⬅️ Back' }
        ]
    },
    outdoorLt: {
        type: 'buttons',
        body: "🌟 Discover the range of the outdoor Laser Tag we offer!",
        buttons: [
            { id: 'btn_battlemaxx_kordin', title: '⚔️ BMX Royal Prison' },
            { id: 'btn_battlemaxx_ghaxaq', title: '🏹 BMX Forest' },
            { id: 'btn_lasertag', title: '⬅️ Back' }
        ]
    },
    cybermaxx: {
        type: 'buttons',
        body: "🚀 Dive into the excitement at our large and modern Laser Tag arena on Level 2, Main Street Shopping Complex, Paola!\n\n🎮 Kid's party packages and private events are ready for booking. 🎉 Don't miss out on the ultimate fun! 🔫💫",
        buttons: [
            { id: 'btn_price_book', title: '🔍👀 Book online' },
            { id: 'btn_pictures_cybermaxx', title: '📷 See pictures' },
            { id: 'btn_indoor', title: '⬅️ Back' }
        ]
    },
    lasermaxx: {
        type: 'buttons',
        body: "🌟 Immerse yourself in the thrill of our indoor Laser Tag arena on Level 4, Bay Street Complex, St.Julian's, complete with dynamic lighting, swirling fog, and high-energy music to elevate the excitement 🚀🔦🎶\n\n🎉 Explore special packages tailored for birthday parties, corporate gatherings, and private events. Make your celebrations unforgettable with us! 🎂👔🎈",
        buttons: [
            { id: 'btn_price_book', title: '🔍👀 Book online' },
            { id: 'btn_pictures_lasermaxx', title: '📷 See pictures' },
            { id: 'btn_indoor', title: '⬅️ Back' }
        ]
    },
    battlemaxxPrison: {
        type: 'buttons',
        body: "🎮 Embark on thrilling new game scenarios at the spectacular location of The Royal Navy Prison, constructed in 1866! 🏰⚔️\n\n🚪 Changing rooms, toilets, and a café are at your disposal for added convenience. Join the adventure and make unforgettable memories with us!",
        buttons: [
            { id: 'btn_price_book', title: '🔍👀 Book online' },
            { id: 'btn_pictures_kordin', title: '📷 See pictures' },
            { id: 'btn_outdoor', title: '⬅️ Back' }
        ]
    },
    battlemaxxForest: {
        type: 'buttons',
        body: "🌳 Embark on exhilarating new game scenarios at the expansive green area nestled in the woods in the South of Malta! 🏞️🎮\n\nJoin the adventure surrounded by nature and create lasting memories in this picturesque setting! 🌲✨",
        buttons: [
            { id: 'btn_price_book', title: '🔍👀 Book online' },
            { id: 'btn_pictures_ghaxaq', title: '📷 See pictures' },
            { id: 'btn_outdoor', title: '⬅️ Back' }
        ]
    }
};