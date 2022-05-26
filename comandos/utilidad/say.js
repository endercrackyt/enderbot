const Discord = require(`discord.js`);

module.exports = {
  name: "say",
  alias: [],

  execute (client, message, args){
    
    let texto = args.join(" ") 

    if(!texto) return message.channel.send(" no hay texto")

      if(texto.includes("@everyone") || texto.includes("@here")){
        message.delete()
        return message.channel.send("everyone Bv")
      }

   message.delete()

   message.channel.send(texto)

		 
 
 }
  
}