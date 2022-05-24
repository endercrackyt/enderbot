const Discord = require(`discord.js`);

module.exports = {
  name: "send",
  alias: [],

  execute (client, message, args){

    if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply({ content: 'no tengo permisos', allowedMentions: { repliedUser: false }})

    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply({ content: 'no tienes permisos', allowedMentions: { repliedUser: false }})

   let canal = message.mentions.channels.first();

   if(!canal) return message.channel.send("lo siento no hay canal")
		if(!message.guild.channels.cache.get(canal.id)) return message.reply(`el canal no esta en este servidor`)

   let texto = args.slice(1).join(` `)

   if(!texto) return message.channel.send(" no hay texto")

			 message.delete()
		message.reply({ content: `mensaje mandado`, ephemeral: true })

   canal.send(texto)

  }
  
}