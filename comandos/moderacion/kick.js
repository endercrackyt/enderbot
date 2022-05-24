const Discord = require(`discord.js`);
const ms = require("ms")

module.exports = {
  name: "kick",
  alias: [],

  async execute (client, message, args){

    if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("No tengo los permisos!")

    let user = message.mentions.members.first();

   if(!user) return message.reply("no puedo expulsar a nadie mencionalo")

   if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("no tienes permisos para usar este comando")

		
    if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.reply("no puede expulsar a alguien igual o mayor rango que tu")

    if(user === message.author) return message.reply("no te puedes autoexpulsarte") 
 
    let kickReason = args.join(" ");
    if(!kickReason) return("debes decir por que lo voy a banear")


   user.kick(kickReason)


    message.channel.send(`el usuario ${user} fue expulsado por ${kickReason}`)


  }
  
}