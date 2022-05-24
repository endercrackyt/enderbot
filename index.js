const Discord = require(`discord.js`);
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents, enabledEvents: ['TYPING_START'] });

const keepAlive = require('./server.js');
const express = require("express")().get("/", (req,res)=>res.send("enderbot listo y ready")).listen(3000)

// eventos readys para cosas

//evento ready

client.on("ready", () => {
	console.log("enderbot listo")
})

// handler

const fs = require("fs") 
let { readdirSync } = require("fs")
// comandos sin categoria
const path = require(`path`)

client.commands = new Discord.Collection()

	const commands = fs.readdirSync(path.join(__dirname, `./comandos`))
for(const folders of commands){
	const folder = 	fs.readdirSync(path.join(__dirname, `./comandos`, folders))
	for(const file of folder) {
	const cmd = require(path.join(__dirname, `./comandos`, folders, file))
		client.commands.set(cmd.name, cmd);
	}
}

// event handler

const events = fs.readdirSync(path.join(__dirname, `eventos`))
for(const file of events) {
	const event = require(path.join(__dirname, `eventos`, file))
		client.on(event.name, async (...args) => event.run(client, ...args));
} 

////////////mensaje del prefix//////////

client.on("messageCreate", async (message) => {

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {

    message.reply(`hola este es mi prefix :D \n\ Prefix: e!`)

  }

});

////////////commandos





const mySecret = process.env['token']
client.login(mySecret); 
console.log(`Iniciado con node ${process.version}`)

