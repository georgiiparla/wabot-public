import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // --- 1. Define Messages (Menus) ---
    // We create an entry for every "screen" or "message" your bot can send.

    await prisma.interactiveMessage.createMany({
        data: [
            // --- Special "root" message ---
            { id: 'main_menu', type: 'BUTTONS', bodyText: "*Hi! I'm a Multimaxx bot.* 📌 Here you can get more information about activities we provide, photos from our venues and details regarding party packages. Use the buttons below to navigate through the menu." },

            // --- Company Info Flow ---
            { id: 'about_us', type: 'BUTTONS', bodyText: "Multimaxx is an entertainment company which is based on 🔫 Laser tag. Our locations feature urban battlefields, outdoor terrains for realistic experience (BATTLEMAXX), and indoor futuristic arenas (LASERMAXX, CYBERMAXX).\nBut that's not all. Explore 🎮 VIRTUALMAXX for a 360-degree virtual experience, 🚗💥 BUMPERMAXX to challenge your driving skills with electric bumper cars, and 🕹️ ARCADMAXX for classic arcade fun!\n🎁 Tailored packages await for birthdays, camps, youth groups, schools, corporate team-building, and private events. You can get more information via this online bot, or from our website and socials." },
            { id: 'website_link', type: 'URL', bodyText: 'Follow the link below', headerText: 'MULTIMAXX Website', url: 'https://www.starwarsmalta.com/', urlDisplayText: 'Multimaxx' },
            { id: 'socials_links', type: 'TEXT', bodyText: "👥 *MULTIMAXX Facebook:*\nwww.facebook.com/multimaxxmalta\n\n📱 *MULTIMAXX Instagram:*\nwww.instagram.com/multimaxxmalta\n\n👥 *BATTLEMAXX Facebook:*\nwww.facebook.com/battlemaxx" },

            // --- Services Flow ---
            { id: 'our_services', type: 'BUTTONS', bodyText: "🌟 To discover the range of activities we offer, press the 🚀 *Activities* button\n\nTo explore offers and promotions, please, press the 🎁 *Deals & Promotions* button.\n\n*Attention!*\nIf you wish to book something from 🎁 *Deals & Promotions*, kindly wait for our call or call us back, and we will book a party for you.\nYou also can book it online by following this link:\n\nwww.starwarsmalta.com" },
            { id: 'all_activities', type: 'BUTTONS', bodyText: "🌟 To obtain the information about our laser tag and book a game, press the 🔫 *Laser Tag* button.\n\nTo get details about other activities such as Arcade Machines, Virtual Reality and Bumper Cars, kindly press the 🕹️ *Attractions* button." },
            { id: 'packages_promo', type: 'DOCUMENT_LINK', bodyText: 'Here are the packages!', documentUrl: 'https://nmkfmjmgapcozfyphyvm.supabase.co/storage/v1/object/public/partyDeals/Multimaxx%20Party%20Offers%202024.pdf', documentCaption: 'Deals & Promotions for all locations', documentFilename: 'Packages' },
            { id: 'bmx_offer', type: 'URL', bodyText: 'Follow the link below', headerText: 'Check all latest flash offers', url: 'https://www.starwarsmalta.com/#comp-m0uz179u', urlDisplayText: 'Use offer' },
            { id: 'pavi_offer', type: 'URL', bodyText: 'Follow the link below', headerText: 'Special offer in PAVI', url: 'https://www.instagram.com/p/C8-FAu4OEOw/?utm_source=ig_web_copy_link', urlDisplayText: 'Use offer' },


            // --- Laser Tag Flow ---
            { id: 'laser_tag', type: 'BUTTONS', bodyText: '🤖 Choose the type!' },
            { id: 'attractions', type: 'BUTTONS', bodyText: "🕶️ Virtual Reality - ...\n**Available only in Multimaxx PAVI*" }, // Truncated for brevity
            { id: 'attractions_pictures', type: 'URL', bodyText: 'Follow the link below', headerText: 'Photos from our venues', url: 'https://www.instagram.com/multimaxxmalta/', urlDisplayText: 'See pictures' },

            { id: 'indoor_lt', type: 'BUTTONS', bodyText: '🌟 Discover the range of the indoor Laser Tag we offer!' },
            { id: 'outdoor_lt', type: 'BUTTONS', bodyText: '🌟 Discover the range of the outdoor Laser Tag we offer!' },

            { id: 'cybermaxx', type: 'BUTTONS', bodyText: "🚀 Dive into the excitement at our large and modern Laser Tag arena on Level 2, Main Street Shopping Complex, Paola!\n\n🎮 Kid's party packages and private events are ready for booking. 🎉 Don't miss out on the ultimate fun! 🔫💫" },
            { id: 'lasermaxx', type: 'BUTTONS', bodyText: "🌟 Immerse yourself in the thrill of our indoor Laser Tag arena on Level 4, Bay Street Complex, St.Julian's, ..." }, // Truncated
            { id: 'cmx_pictures', type: 'URL', bodyText: 'Follow the link below', headerText: 'Photos from our venues', url: 'https://imgur.com/a/PWpoQqT', urlDisplayText: 'See pictures' },
            { id: 'lmx_pictures', type: 'URL', bodyText: 'Follow the link below', headerText: 'Photos from our venues', url: 'https://www.instagram.com/multimaxxmalta/', urlDisplayText: 'See pictures' },

            { id: 'battlemaxx_prison', type: 'BUTTONS', bodyText: '🎮 Embark on thrilling new game scenarios at the spectacular location of The Royal Navy Prison, constructed in 1866! 🏰⚔️\n\n🚪 Changing rooms, toilets, and a café are at your disposal for added convenience. Join the adventure and make unforgettable memories with us!' },
            { id: 'battlemaxx_forest', type: 'BUTTONS', bodyText: '🌳 Embark on exhilarating new game scenarios at the expansive green area nestled in the woods in the South of Malta! 🏞️🎮\n\nJoin the adventure surrounded by nature and create lasting memories in this picturesque setting! 🌲✨' },
            { id: 'bmx_prison_pictures', type: 'URL', bodyText: 'Follow the link below', headerText: 'Photos from BATTLEMAXX Lasertag', url: 'https://www.facebook.com/battlemaxx/', urlDisplayText: 'See pictures' },
            { id: 'bmx_ghaxaq_pictures', type: 'URL', bodyText: 'Follow the link below', headerText: 'Photos from BATTLEMAXX Lasertag', url: 'https://www.facebook.com/battlemaxx/', urlDisplayText: 'See pictures' },

            // --- Contact Flow ---
            { id: 'contact_us', type: 'BUTTONS', bodyText: "🚀 MULTIMAXX, Level 4, Bay Street Complex, ...\n📧 info@starwarsmalta.com" }, // Truncated
            { id: 'operator_chat', type: 'URL', bodyText: 'Press the button below.', headerText: 'To chat with our operators', url: 'https://wa.me/message/BJBEEA44KRBSN1', urlDisplayText: 'Chat online' },

            // --- Common ---
            { id: 'booking_link', type: 'URL', bodyText: 'Follow the link below', headerText: 'To book online', url: 'https://www.starwarsmalta.com/', urlDisplayText: 'Book online' },
        ],
        skipDuplicates: true, // Good for re-running the seed
    });

    // --- 2. Define Buttons ---
    // Now we link the messages together using buttons.
    // The 'id' is the buttonId from your old code.
    // 'messageId' is the screen the button *is on*.
    // 'triggersMessageId' is the screen the button *leads to*.

    await prisma.button.createMany({
        data: [
            // --- Main Menu Buttons ---
            { id: 'btn_menu_company', title: '🌐 About Us', messageId: 'main_menu', triggersMessageId: 'about_us' },
            { id: 'btn_menu_services', title: '🎉 Our Services', messageId: 'main_menu', triggersMessageId: 'our_services' },
            { id: 'btn_menu_contact', title: '☎️ Chat with us', messageId: 'main_menu', triggersMessageId: 'contact_us' }, // 'contact_us' will also trigger operator_chat

            // --- About Us Buttons ---
            { id: 'btn_websites', title: '🔗 Website', messageId: 'about_us', triggersMessageId: 'website_link' },
            { id: 'btn_socials', title: '📌 Our Socials', messageId: 'about_us', triggersMessageId: 'socials_links' },
            { id: 'btn_about_back', title: '📑 Back to Menu', messageId: 'about_us', triggersMessageId: 'main_menu' },

            // --- Our Services Buttons ---
            { id: 'btn_all_activities', title: '🚀Activities', messageId: 'our_services', triggersMessageId: 'all_activities' },
            { id: 'btn_packages', title: '🎁Deals & Promotions', messageId: 'our_services', triggersMessageId: 'packages_promo' }, // 'packages_promo' will also trigger others
            { id: 'btn_services_back', title: '📑 Back to Menu', messageId: 'our_services', triggersMessageId: 'main_menu' },

            // --- All Activities Buttons ---
            { id: 'btn_lasertag', title: '🔫 Laser Tag', messageId: 'all_activities', triggersMessageId: 'laser_tag' },
            { id: 'btn_attractions', title: '🕹️ Attractions', messageId: 'all_activities', triggersMessageId: 'attractions' },
            { id: 'btn_activities_back', title: '⬅️ Back', messageId: 'all_activities', triggersMessageId: 'our_services' },

            // --- Attractions Buttons ---
            { id: 'btn_pictures_attractions', title: '📷 See pictures', messageId: 'attractions', triggersMessageId: 'attractions_pictures' },
            { id: 'btn_attractions_back', title: '⬅️ Back', messageId: 'attractions', triggersMessageId: 'all_activities' },

            // --- Laser Tag (Type) Buttons ---
            { id: 'btn_indoor', title: '🏢 Indoor', messageId: 'laser_tag', triggersMessageId: 'indoor_lt' },
            { id: 'btn_outdoor', title: '🌳 Outdoor', messageId: 'laser_tag', triggersMessageId: 'outdoor_lt' },
            { id: 'btn_lasertag_back', title: '⬅️ Back', messageId: 'laser_tag', triggersMessageId: 'all_activities' },

            // --- Indoor LT Buttons ---
            { id: 'btn_lasermaxx', title: '🚀 LASERMAXX', messageId: 'indoor_lt', triggersMessageId: 'lasermaxx' },
            { id: 'btn_cybermaxx', title: '🌐 CYBERMAXX', messageId: 'indoor_lt', triggersMessageId: 'cybermaxx' },
            { id: 'btn_indoor_back', title: '⬅️ Back', messageId: 'indoor_lt', triggersMessageId: 'laser_tag' },

            // --- Outdoor LT Buttons ---
            { id: 'btn_battlemaxx_kordin', title: '⚔️ BMX Royal Prison', messageId: 'outdoor_lt', triggersMessageId: 'battlemaxx_prison' },
            { id: 'btn_battlemaxx_ghaxaq', title: '🏹 BMX Forest', messageId: 'outdoor_lt', triggersMessageId: 'battlemaxx_forest' },
            { id: 'btn_outdoor_back', title: '⬅️ Back', messageId: 'outdoor_lt', triggersMessageId: 'laser_tag' },

            // --- Cybermaxx Buttons ---
            { id: 'btn_price_book_cmx', title: '🔍👀 Book online', messageId: 'cybermaxx', triggersMessageId: 'booking_link' },
            { id: 'btn_pictures_cybermaxx', title: '📷 See pictures', messageId: 'cybermaxx', triggersMessageId: 'cmx_pictures' },
            { id: 'btn_cybermaxx_back', title: '⬅️ Back', messageId: 'cybermaxx', triggersMessageId: 'indoor_lt' },

            // --- Lasermaxx Buttons ---
            { id: 'btn_price_book_lmx', title: '🔍👀 Book online', messageId: 'lasermaxx', triggersMessageId: 'booking_link' },
            { id: 'btn_pictures_lasermaxx', title: '📷 See pictures', messageId: 'lasermaxx', triggersMessageId: 'lmx_pictures' },
            { id: 'btn_lasermaxx_back', title: '⬅️ Back', messageId: 'lasermaxx', triggersMessageId: 'indoor_lt' },

            // --- BMX Prison Buttons ---
            { id: 'btn_price_book_bmx_p', title: '🔍👀 Book online', messageId: 'battlemaxx_prison', triggersMessageId: 'booking_link' },
            { id: 'btn_pictures_kordin', title: '📷 See pictures', messageId: 'battlemaxx_prison', triggersMessageId: 'bmx_prison_pictures' },
            { id: 'btn_bmx_prison_back', title: '⬅️ Back', messageId: 'battlemaxx_prison', triggersMessageId: 'outdoor_lt' },

            // --- BMX Forest Buttons ---
            { id: 'btn_price_book_bmx_f', title: '🔍👀 Book online', messageId: 'battlemaxx_forest', triggersMessageId: 'booking_link' },
            { id: 'btn_pictures_ghaxaq', title: '📷 See pictures', messageId: 'battlemaxx_forest', triggersMessageId: 'bmx_ghaxaq_pictures' },
            { id: 'btn_bmx_forest_back', title: '⬅️ Back', messageId: 'battlemaxx_forest', triggersMessageId: 'outdoor_lt' },

            // --- Contact Us Buttons ---
            { id: 'btn_contact_back', title: '📑 Back to Menu', messageId: 'contact_us', triggersMessageId: 'main_menu' },
        ],
        skipDuplicates: true,
    });

    console.log('Seeding finished.');
}

main()
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });