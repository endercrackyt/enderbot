const Discord = require(`discord.js`);
const ms = require("ms")

module.exports = {
  name: "mute",
  alias: [],

  async execute (client, message, args){

    if(!message.guild.me.permissions.has("MODERATE_MEMBERS")) return message.reply("No tengo los permisos!")

    let user = message.mentions.members.first();

   if(!user) return message.reply("no puedo mutear a nadie mencionalo")

   if(user.isCommunicationDisabled()) return message.reply("el usuario ya esta muteado")

   if(!message.member.permissions.has("MODERATE_MEMBERS")) return message.reply("no tienes permisos para usar este comando")

		
    if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.reply("no puede mutear a alguien igual o mayor rango que tu")

    if(user === message.author) return message.reply("no te puedes au kickear") 

    let tiempo = args[1]

    if(!tiempo) return message.reply("por cuanto tiempo dimelo")

    let time = ms(tiempo)

		 if(user == message.member.bot) return message.reply("a")
    
    let muteReason = args[2];
    if(!muteReason) return("debes decir por que lo voy a mutear")

		try{
	
      await user.timeout(time, muteReason)

		} catch(e){
			console.error(e)
		}

    message.channel.send(`el usuario ${user} fue muteado por ${tiempo} con la razon de ${muteReason}`)


  }
  
     }