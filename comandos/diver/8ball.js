const Discord = require(`discord.js`);

module.exports = {
  name: "8ball",
  alias: [],

  execute (client, message, args){
  var Numero = [`si`, `no`, `tal vez`, `no se `, `posiblemente`, `mentira`]
  var Aleatorio = Math.floor(Math.random()*(Numero.length));

    
  message.reply(`mi respuesta es es: ${Numero[Aleatorio]}`);   
  }
  
}