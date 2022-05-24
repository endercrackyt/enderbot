const Discord = require(`discord.js`);
const ms = require("ms")

module.exports = {
  name: "dm",
  alias: [],

  async execute (client, message, args){

    let user = message.mentions.members.first();

   if(!user) return message.reply("no puedo expulsar a nadie mencionalo")

		let texto = args.slice(1).join(` `)

   if(!texto) return message.channel.send(" no hay texto")


		try{
			message.delete()
			user.send(texto)
		} catch(e) {
			message.channel.send(e)
		}
    


  }
  
}