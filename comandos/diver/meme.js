const Discord = require(`discord.js`);

module.exports = {
  name: "meme",
  alias: [],

  async  execute (client, message, args){

		var Memes = [ "https://cdn.discordapp.com/attachments/920512164387778561/923984094445064192/OIP_1.jpeg","https://cdn.discordapp.com/attachments/920512164387778561/923984094197588039/1640231031617.png", "https://cdn.discordapp.com/attachments/920512164387778561/923984093216116736/1640230805578.jpg"]
  var Aleatoria = Math.floor(Math.random()*(Memes.length));

    let embed = new Discord.MessageEmbed()
    .setImage(Memes[Aleatoria])
    .setColor(0x04f6e6)
    .setFooter(`Meme pedido por: ${message.author.username}`);

    message.channel.send({ embeds: [embed] });



  }
  
}