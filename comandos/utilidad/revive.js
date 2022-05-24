const Discord = require(`discord.js`);

module.exports = {
  name: "revive",
  alias: [],

  execute (client, message, args){

    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`no tienes permisos`)

    if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send(`no tienes permisos`)

    message.channel.send(`@everyone revivan y les doy un pastel :3`)




  }
  
}