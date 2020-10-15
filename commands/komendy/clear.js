const Discord = require("discord.js");
const MessageEmbed = require("discord.js");
 
module.exports = {
    name: "clear",
    aliases: [`c`],
    usage: "[command || alias]",
    run: async (bot, message, args) => {
 
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply(`nie masz uprawnień! Potrzebujesz **Zarządzanie wiadomościami**!`)
        }
 
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply(`BOT nie ma uprawnień! BOT potrzebuje permisji **Zarządzanie wiadomościami**!`)
        }
 
        if(!args[0]) {
            return message.reply(`podaj ilość wiadomości do usunięcia!`)
        }
 
        message.channel.bulkDelete(args[0]);
 
        const embed = new Discord.MessageEmbed()
        .setDescription(`Chat został wyczyszczony przez użytkownika: <@${message.author.id}>`)
        message.channel.send(embed)
        
    }
}