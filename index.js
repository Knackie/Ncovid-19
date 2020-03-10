const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone : true});

bot.on("ready", async() => {
	console.log(`${bot.user.username} is here !`)
	bot.user.setActivity("Currently cotaminating people", {type:"STREAMING"});
})

bot.on("message", async message => {
	if (message.author.bot || message.channel.type === "dm") return;
	
	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ")
	let cmd = messageArray[0];
	let args = messageArray.slice[0];

	if(cmd === `${prefix}check`){
		return message.channel.send("You now have coronavirus.")
	}
})
bot.login(botconfig.token)
