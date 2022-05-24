const Discord = require(`discord.js`);

module.exports = {
  name: "channel",
  alias: [],

  execute (client, message, args){

    if(message.guild.id != `841476632978915328`) return;

    message.channel.send(`Hola endercrack habeces sube cosas a yt xd si te llama la atencion aqui esta : \n\ https://youtube.com/channel/UCv0PpAriU-subfVYnbfQMrg`)
    
  }
  
}