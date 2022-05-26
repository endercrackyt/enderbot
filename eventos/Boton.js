const Discord = require(`discord.js`)

module.exports = {
	name: `interactionCreate`,
	async run(client, int){
		if(int.isButton()){
			if(int.customId === `1`) {
				
			let staff = new Discord.Modal()
			.setTitle(`Apply para staff`)
			.setCustomId(`apply`);

			let option = new Discord.TextInputComponent()
			.setCustomId(`A`)
			.setLabel(`del 1 al 10 que tan maduro te consideras`)
			.setMaxLength(`1`)
			.setStyle(`PARAGRAPH`)
			.setPlaceholder(`1-10`)
			.setRequired(true)

			let option2 = new Discord.TextInputComponent()
			.setCustomId(`B`)
			.setLabel(`Por que quieres ser staff`)
			.setStyle(`PARAGRAPH`)
			.setPlaceholder(`¿Por que?`)
			.setRequired(true)

			let option3 = new Discord.TextInputComponent()
			.setCustomId(`C`)
			.setLabel(`Algo mas`)
			.setStyle(`PARAGRAPH`)
			.setPlaceholder(`algo mas?`)
			.setRequired(true)

				let row = new Discord.MessageActionRow()
			.addComponents(option)
			let row2 = new Discord.MessageActionRow()
			.addComponents(option2)
			let row3 = new Discord.MessageActionRow()
			.addComponents(option3)

				staff.addComponents(row, row2, row3)

			 await int.showModal(staff);
			}
			if (int.customId === `2`) {
				
			let staff = new Discord.Modal()
			.setTitle(`Apply para dev`)
			.setCustomId(`apply2`);

			let option = new Discord.TextInputComponent()
			.setCustomId(`A2`)
			.setLabel(`Que lenguaje sabes`)
			.setMaxLength(`20`)
			.setStyle(`PARAGRAPH`)
			.setPlaceholder(`Javascript, python etc.`)
			.setRequired(true)

			let option2 = new Discord.TextInputComponent()
			.setCustomId(`B2`)
			.setLabel(`Por que quieres ser dev`)
			.setStyle(`PARAGRAPH`)
			.setPlaceholder(`¿Por que?`)
			.setRequired(true)

			let option3 = new Discord.TextInputComponent()
			.setCustomId(`C2`)
			.setLabel(`Que sabes hacer`)
			.setStyle(`PARAGRAPH`)
			.setPlaceholder(`bots, webs etc.`)
			.setRequired(true)

				let row = new Discord.MessageActionRow()
			.addComponents(option)
			let row2 = new Discord.MessageActionRow()
			.addComponents(option2)
			let row3 = new Discord.MessageActionRow()
			.addComponents(option3)

				staff.addComponents(row, row2, row3)

			 await int.showModal(staff);
			}
		}
	
	  if (int.isModalSubmit()) {
	  if (int.customId === `apply`) {
			let A = int.fields.getTextInputValue(`A`)
			let B = int.fields.getTextInputValue(`B`)
			let C = int.fields.getTextInputValue(`C`)
			int.reply(`Hola tu apply fue enviada`)
			client.channels.cache.get(`964015365472518185`).send(`apply hecha por ${int.user.tag} \n Madurez: ${A} Por que: ${B} algo mas: ${C}`)
		}
			 if (int.customId === `apply2`) {
			let A = int.fields.getTextInputValue(`A2`)
			let B = int.fields.getTextInputValue(`B2`)
			let C = int.fields.getTextInputValue(`C2`)
			int.reply(`Hola tu apply fue enviada`)
			client.channels.cache.get(`964015365472518185`).send(`apply hecha por ${int.user.tag} \n Madurez: ${A} Por que: ${B} algo mas: ${C}`)
		}
	}
	
	}
}