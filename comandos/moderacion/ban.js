const Discord = require(`discord.js`);
const ms = require("ms")

module.exports = {
  name: "ban",
  alias: [],

  async execute (client, message, args){

    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("No tengo los permisos!")

    let user = message.mentions.members.first();

   if(!user) return message.reply("no puedo banear a nadie mencionalo")

   if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("no tienes permisos para usar este comando")

		
    if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.reply("no puede banear a alguien igual o mayor rango que tu")

    if(user === message.author) return message.reply("no te puedes au banear") 
 
    let banReason = args.join(" ");
    if(!banReason) return("debes decir por que lo voy a banear")


   user.ban(banReason)


    message.channel.send(`el usuario ${user} fue muteado por  ${banReason}`)


  }
  
      }