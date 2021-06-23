const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () =>
{
    console.log('i am ready!');
    client.user.setActivity("Under development by Leo(leleo#6087.")
});


client.on("message", async message => 
{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    //Comands for moeda
    var lados = ['cara', 'coroa'];
    var name = lados[Math.floor(Math.random() * 2)]
    
    if(comando === "moeda")
    {
        const s = await message.channel.send("Processando...");
        s.edit(`A moeda caiu no lado da ${name}`);
    }
});

//Mensagem quando alguém entra no servidor!
client.on("guildMemberAdd", member => 
{
    const welcomeChannel = member.guild.channels.cache.find(
      channel => channel.id === "855869439491964960"
    );
    welcomeChannel.send(`${member} entrou pela porta da frente!`);

    //Adicionando cargo quando entrar no servidor.
    let cargo = member.guild.roles.cache.find(cargo => cargo.id === "816501307065630730")
    member.roles.add(cargo);
});

//Mensagem quando alguém sair no servidor!
client.on("guildMemberRemove", member => 
{
    const welcomeChannel = member.guild.channels.cache.find(
      channel => channel.id === "855894091078696963"
    );
    welcomeChannel.send(`${member} foi embora pela porta dos fundos!`);
});

client.login(config.token);