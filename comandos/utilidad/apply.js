const Discord = require(`discord.js`);

module.exports = {
  name: "apply",
  alias: [],

  async  execute (client, message, args){

		let row = new Discord.MessageActionRow()
    .addComponents([
        new Discord.MessageButton()
       .setCustomId("1")
       .setLabel("Staff")
       .setStyle("SECONDARY")
			 .setEmoji(`963553697042944040`)
			],
			[
        new Discord.MessageButton()
       .setCustomId("2")
       .setLabel("Develeoper")
       .setStyle("PRIMARY")
			 .setEmoji(`934471604132532224`)
			]
			)
		
    await message.channel.send({ content: `Applys para develeoper y Staff \n solo toca el boton respectivo`, components: [row] })

		
  }
  
}