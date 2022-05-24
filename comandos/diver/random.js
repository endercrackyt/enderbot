const Discord = require(`discord.js`);

module.exports = {
  name: "random",
  alias: [],

  execute (client, message, args){
  var Numero = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`]
  var Aleatorio = Math.floor(Math.random()*(Numero.length));

    
  message.reply(`tu numero es: ${Numero[Aleatorio]}`);   
  }
  
}