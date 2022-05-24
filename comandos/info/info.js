const Discord = require(`discord.js`);

module.exports = {
  name: "info",
  alias: [],

  execute (client, message, args){

    

    let embed = new Discord.MessageEmbed()
      .setTitle('informacion de enderbot')
      .setColor(0x00a8b6)
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription('hola soy enderbot un bot multifuncional')
      .addField("creado por:", "endercrack")
      .addField("un bot con comandos chidos como:", "say,kick,8ball y más :D")
      .addField("para saber que mas comandos hay usa:", "e!help")
      .setFooter(`Informacion pedida por: ${message.author.username}`);

    message.channel.send({ embeds: [embed] })

  }
  
}