const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
setInterval( () => {
client.channels.get("574520549469061142").send("#daily")
}, 86400000)
});

client.login(process.env.BOT_TOKEN);
