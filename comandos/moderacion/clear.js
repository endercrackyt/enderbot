const Discord = require(`discord.js`);

module.exports = {
  name: "clear",
  alias: [],

  execute (client, message, args){

        if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("No tengo los permisos!")

   if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`no tienes permisos`)

    let cantidad = args.join(" ")

    if(!cantidad) return message.channel.send("por facor escribeme una cantidad")

    if(cantidad >= 100) return message.channel.send("perdone pero esa cantidad excede mis limites escribe una menor que 100")

        if(isNaN(cantidad)) return message.channel.send("escribe una cantidad  en numeros")

    message.delete().then(q => {
      message.channel.bulkDelete(cantidad, true);
      message.channel.send(`vaya acabo de eliminar ${cantidad} mensajes :0`)

    })   
	}
  
}