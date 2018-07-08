const Discord = require("discord.js");
const client = new Discord.Client();
//const token = require("./settings.json").token;;
const fs = require("fs");

client.on("ready",() => {
	console.log("I'm online supreme leader");
});

client.on('guildMemberAdd', member => {
	console.log('User ' + member.user.username + ' as join the server');
	member.guild.channels.get('369435011340042242').send(`Bienvenue à ${member.user.username}, merci de bien vouloir lire les règles, elles vous ont été envoyées par mp également`)
});

let rules = fs.readFileSync("./rules.md", "utf8");

client.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send(rules)
  }).catch(console.error);
});

var prefix ="!"
client.on("message", message => {
	if (!message.content.startsWith(prefix)) return;

	if (message.author.bot) return;

	if (message.content.startsWith(prefix + "salut")) {
		message.channel.sendMessage("Bonjour");
	}

	/*if (message.content.startsWith(prefix + "régles")) {
		user.send(rules).catch(console.log("erreur msg régles"));
	}*/
});


client.login(process.env.bot_token);
