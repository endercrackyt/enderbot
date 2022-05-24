const Discord = require(`discord.js`);
const ms = require("ms")

module.exports = {
  name: "unmute",
  alias: [],

  async execute (client, message, args){

    if(!message.guild.me.permissions.has("MODERATE_MEMBERS")) return message.reply("No tengo los permisos!")

    let user = message.mentions.members.first();

   if(!user) return message.reply("no puedo mutear a nadie mencionalo")

   if(!user.isCommunicationDisabled()) return message.reply("el usuario ya esta desmuteado")

   if(!message.member.permissions.has("MODERATE_MEMBERS")) return message.reply("no tienes permisos para usar este comando")

		


    if(user === message.author) return message.reply("no te puedes desmutear a ti mismo") 
	
      await user.timeout(null)

		

    message.channel.send(`el usuario ${user} fue desmuteado `)


  }
  
}