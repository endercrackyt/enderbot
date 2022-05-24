const Discord = require(`discord.js`);

module.exports = {
  name: "ask",
  alias: [],

  async  execute (client, message, args){

		let embed = new Discord.MessageEmbed()

    .setTitle(`${message.author.username}, esta pidiendo algo :3`)
    .setColor(0xff09f8)
    .setImage(`https://media.discordapp.net/attachments/920113079180742687/923034031313014814/OIP.jpeg`);

    message.channel.send({ embeds: [embed] });


  }
  
}