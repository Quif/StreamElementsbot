const Discord = require("discord.js");
const bot = new Discord.Client();

// Emits a console log whenever the bot is up and running
bot.on('ready', () => {
console.log(`The bot is up and running!`);
});

// All the events
bot.on('guildMemberAdd', member => {

const channel = member.guild.channels.find('name', 'general');

if (!channel) return;

channel.send(`${member}, Welcome home to **StreamElements**! Check out our video guides: https://www.youtube.com/streamelements/videos `);
});

bot.login('Insert token here')
    