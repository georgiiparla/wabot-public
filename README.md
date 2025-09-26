# 🤖 WhatsApp Bot

A modern, content-driven WhatsApp chatbot. This bot serves as an automated information hub, providing customers with details about services, promotions, locations, and contact information through an interactive, button-based menu.

Originally a school project, it has been refactored to use modern Node.js practices, focusing on security, scalability, and ease of maintenance.

## ✨ Key Features

- **Interactive Menus**: Guides users through a seamless experience with interactive reply buttons.
- **Dynamic Content**: Provides information on company services, laser tag arenas (indoor/outdoor), attractions, and special packages.
- **External Links**: Directs users to the website, booking pages, social media profiles, and online picture galleries.
- **Automated Missed Call Response**: Automatically sends a friendly "Say Hi" message to any missed calls logged through a specific webhook.
- **Secure Configuration**: Keeps all secret keys and environment-specific settings out of the codebase using .env files.
- **Admin-Free Content Management**: Bot replies, buttons, and links can be edited in a simple JavaScript object, requiring no database or admin panel.

## 🏗️ Project Architecture

The bot is built with a clear separation of concerns, making it easy to understand and extend.

- **index.js**: The main Express.js server. It handles incoming webhooks from the WhatsApp Business API, verifies requests, and routes them to the appropriate handlers. It also manages file uploads and other API endpoints.
- **bot.js**: The brain of the chatbot. It processes incoming messages, identifies the message type (text, button reply), and uses a clean handler map to trigger the correct response.
- **services.js**: The communication layer. It contains a single, clean function using axios to send messages to the WhatsApp API, handling authorization and error logging.

### The Content Engine (The Cool Part ✨)

- **messages.content.js**: This is the single source of truth for all bot content. It's a simple, human-readable JavaScript file where you can define all text, buttons, URLs, and message structures. Think of it as a lightweight CMS.
- **models.js**: This file acts as a "message builder" or "engine." On startup, it reads the content from messages.content.js and programmatically constructs all the necessary message objects. This separates the what (the content) from the how (the API JSON structure).

## 🚀 Getting Started

Follow these steps to get the bot running locally.

### Prerequisites

- Node.js (v16 or higher)
- A WhatsApp Business Platform account and API Token.
- A tool like ngrok to expose your local server to the internet for webhook testing.

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a .env file in the root of the project by copying the example file.

```bash
cp .env.example .env
```

Now, open the .env file and fill in your specific details:

```env
# Server Configuration
PORT=3000
UPLOAD_PATH=/tmp

# WhatsApp API Configuration
WHATSAPP_API_URL="https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages"
WHATSAPP_API_TOKEN="YOUR_WHATSAPP_BUSINESS_PLATFORM_API_TOKEN"
WEBHOOK_VERIFY_TOKEN="CREATE_A_STRONG_RANDOM_STRING"
```

- **WHATSAPP_API_URL**: Make sure to replace YOUR_PHONE_NUMBER_ID with the actual ID from your Meta for Developers dashboard.
- **WHATSAPP_API_TOKEN**: Your permanent API token.
- **WEBHOOK_VERIFY_TOKEN**: A secret string you create. You will use this same string when setting up the webhook in the Meta dashboard.

### 4. Run the Bot

```bash
npm start
```

Your server will be running on http://localhost:3000. You can now point your WhatsApp API webhook to your public ngrok URL.

## 🎨 How to Customize the Bot's Replies

No coding required! The biggest advantage of this refactored design is how easy it is to change the bot's content.

1. Open `messages.content.js`.
2. Find the message you want to edit. For example, the main menu:

```javascript
menu: {
    type: 'buttons',
    body: "*Hi! I'm a bot.* 📌 Here you can find info...",
    buttons: [
        { id: 'btn_company_info', title: '🌐 About Us' },
        { id: 'btn_activities_info', title: '🎉 Our Services' },
        { id: 'btn_contacts_info', title: '☎️ Chat with us' }
    ]
},
```

3. Make your changes:
   - To change the text, simply edit the `body` string.
   - To change a button's text, edit the `title`.
   - To add a new button, add a new object to the `buttons` array. Just make sure the `id` is unique and corresponds to a handler in `bot.js`.

The server will automatically pick up the changes the next time it restarts.
