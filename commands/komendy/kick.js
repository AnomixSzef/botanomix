const Discord = require("discord.js");
const MessageEmbed = require("discord.js");
 
module.exports = {
    name: "kick",
    run: async (bot, message, args) => {
 
        if(!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply(`nie masz wystarczających uprawnień na wykonanie polecenia **Wyrzucanie członków**!`)
        }
 
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.reply(`BOT nie posiada uprawnień! BOT potrzebuje permisji **Wyrzucanie członków**!`)
        }
 
        if(!args[0]) {
            return message.reply(`oznacz użytkownika!`)
        }
 
        let osobadowyrzucenia = message.guild.member(message.mentions.users.first());
 
        if(!osobadowyrzucenia) {
            return message.reply(`nie znaleziono użytkownika!`)
        }
 
        if(osobadowyrzucenia.hasPermission("MANAGE_MESSAGES")) {
            return message.reply(`oznaczona osoba nie może zostać wyrzucona!`)
        }
 
        if(!args[1]) {
            return message.reply(`wpisz powód!`)
        }
 
        const powod = args.slice(1).join(" ");
 
        const embed = new Discord.MessageEmbed()
        .setTitle(`Wyrzucony!`)
        .setDescription(`${osobadowyrzucenia} została wyrzucona przez <@${message.author.id}>
 
        Powód: ${powod}`)
        .setFooter(`Przestrzegaj regulamin, bo cię znajdę!`)
        message.channel.send(embed)
 
        osobadowyrzucenia.kick({ reason: powod })
    }
}