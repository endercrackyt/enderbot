const Discord = require(`discord.js`);

module.exports = {
  name: "prank",
  alias: [],

  execute (client, message, args){
  var Numero = [`el de arriba es feo`, `el de abajo no tendra novia`, `el que me uso no tendra novia \n\ me uso ${message.author.tag}`]
  var Aleatorio = Math.floor(Math.random()*(Numero.length));

    message.delete()

    
  message.channel.send(Numero[Aleatorio]);   
  }
  
}