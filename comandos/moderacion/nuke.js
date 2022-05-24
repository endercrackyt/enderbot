 const Discord = require(`discord.js`);

module.exports = {
  name: "nuke",
  alias: [],

  async execute (client, message, args){

   if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("No tengo los permisos!")

   if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`no tienes permisos`) 

    let posicion = message.channel.position

    message.channel.clone().then(canal => {

      message.channel.delete()
      canal.setPosition(posicion)

      canal.send(`<:check:963554878200901692> canal nukeado exitosamente `)
    })

  }
  
} 