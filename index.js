////constante/////
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));

//----------------------------- SISTEMA 24/7 -----------------------------//

const Discord = require("discord.js");
const client = new Discord.Client();

/////precencia//////

function presence() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "moderando",
      type: "WATCHING"
    }
  })
}
client.on("ready", () => {
  console.log("LAS FRUTAS SON SALUDABLES!");
  presence();
});


//---------------------------- CODIGO DEL BOT ----------------------------//







const mySecret = process.env['token']
client.login(mySecret);






//variables//

var prefix = "e!"


////////////comandos /////////////

client.on("message", msg => {

  if (msg.content.startsWith(prefix + "hola")) {

    msg.channel.send("Hola")

  }
});


client.on("message", msg => {

  if (msg.content.startsWith(prefix + "help")) {

    msg.channel.send("hola estos son todos mis comandos \n\ e!hola \n\ e!info  \n\ e!update \n\ e!creator  \n\ e!ender \n\ e!invite \n\ e!prank \n\ e!embed")
    
  }
});


client.on("message", msg => {

  if (msg.content.startsWith(prefix + "creator")) {

    msg.channel.send("hola mi creador es endercrack")

  }
});


client.on("message", msg => {
  if (msg.content.startsWith(prefix + "ender")) {

    msg.channel.send("hola ender y yo somos un pikachu ")

  }
});


client.on("message", msg => {

  if (msg.content.startsWith(prefix + "info")) {

    msg.channel.send("hola soy enderbot soy un bot pa entretener si quieres que moderate esperate a una variante mia")

  }
});


client.on("message", msg => {

  if (msg.content.startsWith(prefix + "info")) {

    msg.channel.send("hola esta vez actualize para dar actualizacion de mis variantes y mia la actualizacion es: \n\ cambio de comandos \n\ proximo enderbot")

  }
});


client.on("message", msg => {

  if (msg.content.startsWith(prefix + "invite")) {

    msg.channel.send("discord ^^ : ")

  }
});


client.on("message", msg => {

  if (msg.content.startsWith(prefix + "variant")) {

    msg.channel.send("soy de la tierra 691")
  }
});

