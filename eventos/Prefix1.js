module.exports = {
	name: `messageCreate`,
	run(client, message){
		
  if(message.channel.type === `dm`) return;
 if(message.author.bot) return;

  let prefix = `e!`

  if(!message.content.startsWith(prefix)) return;


  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  ///////Handler///////

  let cmd = client.commands.find((c) => c.name === command ||  c.alias &&  c.alias.includes(command));

	
		if(cmd){
    cmd.execute(client, message, args)
  }

 } 
}