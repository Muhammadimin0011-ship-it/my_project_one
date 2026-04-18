const TelegramBot = require('node-telegram-bot-api');

const token = 'TOKENINGIZ';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {

    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "/start") {
        bot.sendMessage(chatId, "Assalomu alaykum! Men test botman 🤖");
    }

    else if (text === "salom") {
        bot.sendMessage(chatId, "Salom Muhummad 👋");
    }

});