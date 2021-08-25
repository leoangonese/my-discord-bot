const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () =>
{
    console.log('i am ready!');
    client.user.setActivity("Under development by Leo(leleo#6087).")
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
    //Implemented embed for moeda.
    const embedI = new Discord.MessageEmbed()
    .setColor([0, 186, 255])
    .setTitle('Você jogou a moeda bem forte ein!!!')
    .setDescription(`Sua moeda caiu do lado ${name}!`);
    
    if(comando === "moeda")
    {
        const s = await message.channel.send("Comando Recebido!");
        s.edit(embedI);
    }
});

//Mensagem quando alguém entra no servidor!
client.on("guildMemberAdd", member => 
{
    //Carregar embed (definir ele geral) -- corrigir
    const embed = new Discord.MessageEmbed()
    .setColor([0, 186, 255])
    .setTitle('Olha quem chegou!')
    .setDescription(`${member} entrou pela porta da frente!`);

    const welcomeChannel = member.guild.channels.cache.find(
      channel => channel.id === "855869439491964960"
    );
    welcomeChannel.send(embed);

    //Adicionando cargo quando entrar no servidor.
    let cargo = member.guild.roles.cache.find(cargo => cargo.id === '816501307065630730');
    member.roles.add(cargo);
});

//Mensagem quando alguém sair no servidor!
client.on("guildMemberRemove", member => 
{
    const embed = new Discord.MessageEmbed()
    .setColor([0, 186, 255])
    .setTitle('Perdemos mais um!')
    .setDescription(`${member} foi embora pela porta dos fundos!`);

    const welcomeChannel = member.guild.channels.cache.find(
      channel => channel.id === "855894091078696963"
    );
    welcomeChannel.send(embed);
});

client.login(config.token);