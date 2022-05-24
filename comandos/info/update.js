const Discord = require(`discord.js`);

module.exports = {
  name: "update",
  alias: [],

  execute (client, message, args){


    let embed = new Discord.MessageEmbed()
      .setTitle('Nueva Update!!!')
      .setThumbnail(`https://images-ext-1.discordapp.net/external/M6yBAiXVk__vW4XMjr_bBs2ixy7_61b0TU8_r15ACxE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/862905211001503774/38fd3ae38979bf6ca40c48efea2eb384.png`)
      .setColor(0x1afc30)
      .setDescription('hola esta es mi nueva actualizacion')
      .addField(`**Nuevos comandos**`, `question`)
      .addField(`**comandos mejorados**`, `random`)
      .addField(`**comandos eliminados**`, `variant`)
      .setImage("https://th.bing.com/th/id/OIP.499jcnDKhHjqH7MfJrPgCQHaEK?w=295&h=180&c=7&r=0&o=5&pid=1.7")
      .setFooter(`Informacion pedida por: ${message.author.username}`)

   message.channel.send({ embeds: [embed] });

  

  }
  
}