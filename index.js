////constantes/////
 
require(`dotenv`).config();

//----------------------------- SISTEMA 24/7 -----------------------------//

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

/////constante discord

const Discord = require("discord.js");
const client = new Discord.Client();

/////precencia//////

function presence() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "There`s Nothing Holdin Me Back",
      type: "LISTENING"
    }
  })
}
client.on("ready", () => {
  console.log("I´m still standing");
  presence();
});


//---------------------------- CODIGO DEL BOT ----------------------------//







const mySecret = process.env['token']
client.login(mySecret);






//variables//

var prefix = "e!"


////////////comandos /////////////

/////////////help////////////////////

client.on("message", msg => {

  if (msg.content.startsWith(prefix + "help")) {

    if(msg.content.startsWith(prefix + "help info")) return msg.channel.send("hola los comandos de informacion son: \n\ e!info \n\ e!ender \n\ e!update \n\ e!ping \n\ e!help ")

        if(msg.content.startsWith(prefix + "help enderbot")) return msg.channel.send("hola los comandos de enderbot son: \n\ e!hola  \n\ e!poke \n\ e!variant \n\ e!amigos")

        if(msg.content.startsWith(prefix + "help utilidad")) return msg.channel.send("hola los comandos de utilidad son: \n\ e!revive \n\ e!music \n\ e!say \n\ e!send \n\ e!kick")

        if(msg.content.startsWith(prefix + "help diversion")) return msg.channel.send("hola los comandos de diversion son: \n\ e!prank \n\ e!8ball \n\ e!ask \n\ e!random")
    
    msg.channel.send(`hola ${msg.author} estas son las categorias de mis comandos \n\ info \n\ enderbot \n\ utilidad \n\ diversion `)
    
  }
});

/////////comandos de info/////

client.on("message", msg => {

  if (msg.content.startsWith(prefix + "ping")) {

    msg.channel.send(`Pong! **${client.ws.ping}ms** `)
  }
});


client.on("message", msg => {

  let usuario = msg.mentions.members.first() || msg.member;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (msg.content.startsWith(prefix + "info")) {

    let embed = new Discord.MessageEmbed()
    .setTitle('informacion de enderbot')
    .setColor(0x00a8b6)
    .setThumbnail("https://th.bing.com/th/id/OIP.AUGE7qzvp1K9-TmkxYZGNQHaIP?w=174&h=193&c=7&r=0&o=5&pid=1.7")
    .setDescription('hola soy enderbot un bot multifuncional')
    .addField("creado por:", "endercrack")
    .addField("un bot con comandos chidos como:", "say,kick,8ball y más :D")
    .addField("para saber que mas comandos hay usa:", "e!help")
    .setImage("https://th.bing.com/th/id/OIP.8mpLwUPcYMl2O41esGJN3QHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7")
    .setFooter(`Informacion pedida por: ${msg.author.username}`);

    msg.channel.send(embed)

  }
});


client.on("message", msg => {
  if (msg.content.startsWith(prefix + "ender")) {

    msg.channel.send("hola soy uno de los muchos enderbots musho gusto ^^ ")

  }
});


client.on("message", msg => {

  let usuario = msg.mentions.members.first() || msg.member;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (msg.content.startsWith(prefix + "update")) {

    let embed = new Discord.MessageEmbed()
    .setTitle('Nueva Update!!!')
    .setThumbnail(`https://images-ext-1.discordapp.net/external/M6yBAiXVk__vW4XMjr_bBs2ixy7_61b0TU8_r15ACxE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/862905211001503774/38fd3ae38979bf6ca40c48efea2eb384.png`)
    .setColor(0x1afc30)
    .setDescription('hola esta es mi nueva actualizacion')
    .addField(`**Nuevos comandos**`, `random,send,8ball y ask `)
    .addField(`**Comandos mejorados**`, `info update ask y random`)
     .addField(`**comandos eliminados**`, `embed y ship`)
    .setImage("https://th.bing.com/th/id/OIP.499jcnDKhHjqH7MfJrPgCQHaEK?w=295&h=180&c=7&r=0&o=5&pid=1.7")
    .setFooter(`Informacion pedida por: ${msg.author.username}`)

    msg.channel.send(embed);

  }
});


//////////////comandos de enderbot////

client.on("message", msg => {

  if (msg.content.startsWith(prefix + "hola")) {

    msg.channel.send(`hola ${msg.author} musho gusto`)

  }
});


client.on("message", msg => {

  if (msg.content.startsWith(prefix + "poke")) {

    msg.channel.send("hola mi pokemon favorito es: \n\ scoorbunny")

  }
});


client.on("message", msg => {

  if (msg.content.startsWith(prefix + "variant")) {

    msg.channel.send("soy de la tierra 691")
  }
});


client.on("message", msg => {

  if (msg.content.startsWith(prefix + "amigos")) {

    msg.channel.send("hola mis amigos son el random bot y los enderbot^^")

  }
});



//////comandos de utilidad////////////

client.on("message", msg => {

  if (msg.content.startsWith(prefix + "revive")) {

    if(!msg.guild.me.hasPermission("ADMINISTRATOR")) return msg.channel.send("No tengo los permisos!")

    if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("no tienes permisos para usar este comando")
    
    msg.channel.send("@everyone revivan y el que no, no tendra novia xd")
  }
});


client.on("message", msg => {

  if (msg.content.startsWith(prefix + "music")) {

    msg.channel.send("Hola quieres escuchar la musica que escucho aqui esta: \n\ https://youtu.be/wqxfbL3cMR8")

  }
});


client.on("message", msg => {

  if (msg.content.startsWith(prefix + "say")) {

    let texto = msg.content.slice(4);
    if(texto.startsWith("")){
      texto = texto.slice(1);
    }
    msg.delete()
    msg.channel.send(texto)

  }

});

client.on("message", msg => {

  let usuario = msg.mentions.members.first() || msg.member;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (msg.content.startsWith(prefix + "kick")) {

    if(!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.channel.send("no tengo los permisos arreglame xd")

    let user = msg.mentions.members.first();

    let kickReason = args.join(` `).slice(22);

    if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send("no tienes permisos xD")

    if(!user) return msg.channel.send("perdone pero no puedo expuksar a la nada")

    if (msg.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return msg.channel.send("lo siento pero es igual o mas poderoso que tu")

    if(user === msg.author) return msg.channel.send("no te puedes autokickear XD") 

    if(!kickReason) return msg.channel.send("por que lo quieres expulsar especificate")

    user.kick({ reason: kickReason })

   msg.channel.send(`El usuario **${user}** fue kickeadp por **${kickReason}** \n\ kickeado por enderBot y ${msg.author}`)
  }
});


client.on("message", msg => {

  let usuario = msg.mentions.members.first() || msg.member;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (msg.content.startsWith(prefix + "send")) {

    if(!msg.guild.me.hasPermission("ADMINISTRATOR")) return msg.channel.send("no tengo los permisos paa dar anuncios")

    if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("no tienes permisos para dar anuncios")

    let canal = msg.mentions.channels.first()

    if(!canal) return msg.channel.send(`${msg.author} donde doy el anuncio especificate`)

    let texto = args.slice(1).join(" ")

    if(!texto) return msg.channel.send("que escribo en el anuncio")    

    msg.delete()

    canal.send(texto)

  }
});

//////diversion


client.on("message", msg => {

  let usuario = msg.mentions.members.first() || msg.member;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

    var Mensajes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var Aleatorio = Math.floor(Math.random()*(Mensajes.length));


  if (msg.content.startsWith(prefix + "random")) {

    let embed = new Discord.MessageEmbed()
    .setTitle('**El numero es:**')
    .setThumbnail(`https://images-ext-1.discordapp.net/external/M6yBAiXVk__vW4XMjr_bBs2ixy7_61b0TU8_r15ACxE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/862905211001503774/38fd3ae38979bf6ca40c48efea2eb384.png`)
    .setColor(00000)
    .addField(Mensajes[Aleatorio], `Felicidades`) 
    .setFooter(`numero de: ${msg.author.username}`)

    msg.channel.send(embed);

  }
});


client.on("message", msg => {

  var Ball = [`si`, `no`, `quiziera comprobarlo`, `por supuesto`, `claro que no`, `re si`, `que dijiste`, `XD claro`]
  var Aleatoriedad = Math.floor(Math.random()*(Ball.length));

  if (msg.content.startsWith(prefix + "8ball")) {

    msg.channel.send(Ball[Aleatoriedad])

  }

});


client.on("message", msg => {

  var Pranks= ["el de arriba le gusta el de abajo", "el de arriba no tendra novia", "el que me use es gey xd", "el de arriba le gusta Sofia"]
  var Troll = Math.floor(Math.random()*(Pranks.length));

  if (msg.content.startsWith(prefix + "prank")) {

    msg.channel.send(Pranks[Troll])

  }

});


client.on("message", msg => {

  let usuario = msg.mentions.members.first() || msg.member;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (msg.content.startsWith(prefix + "ask")) {

    let embed = new Discord.MessageEmbed()

    .setTitle(`${msg.author.username}, esta pidiendo algo :3`)
    .setColor(0xff09f8)
    .setImage(`https://media.discordapp.net/attachments/920113079180742687/923034031313014814/OIP.jpeg`);

    msg.channel.send(embed);

  }
});


client.on("message", msg => {

  let usuario = msg.mentions.members.first() || msg.member;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

    var Memes = [ "https://cdn.discordapp.com/attachments/920512164387778561/923984094445064192/OIP_1.jpeg","https://cdn.discordapp.com/attachments/920512164387778561/923984094197588039/1640231031617.png", "https://cdn.discordapp.com/attachments/920512164387778561/923984093216116736/1640230805578.jpg"]
  var Aleatoria = Math.floor(Math.random()*(Memes.length));


  if (msg.content.startsWith(prefix + "meme")) {

    let embed = new Discord.MessageEmbed()
    .setImage(Memes[Aleatoria])
    .setColor(0x04f6e6)
    .setFooter(`Meme pedido por: ${msg.author.username}`);

    msg.channel.send(embed);

  }
});