const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', msg => {
    if(msg.content === 'aytp'){
   return msg.reply('Bon ba gg\nenfaite ya rien\nc\'est Alexandre qui a l\'énigme dans sa poche :)\nta fait tout ça pour rien c:')
    }
});

client.login(process.env.token)