const Discord = require(`discord.js`);

module.exports = {
  name: "apply",
  alias: [],

  async  execute (client, message, args){

    message.reply("Categorias: \n staff \n develeoper ")

		if(message.content.toLowerCase().endsWith("staff")) {
   let row = new Discord.MessageActionRow()
    .addComponents([
        new Discord.MessageButton()
       .setCustomId("1")
       .setLabel("Staff")
       .setStyle("SUCCESS")
			])
		return await message.channel.send({ content: `apply para Staff`, components: [row] })

		}
		
  }
  
}