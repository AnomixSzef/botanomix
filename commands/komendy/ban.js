const Discord = require("discord.js");
const MessageEbmed = require("discord.js");
 
module.exports = {
    name: "ban",
    run: async (bot, message, args) => {
 
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply(`nie masz uprawnień! Potrzebujesz permisji **Banowanie członków!**`)
        }
 
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply(`BOT nie ma uprawnień! BOT potrzebuje permisji Banowanie członków!`)
        }
 
        if(!args[0]) {
            return message.reply(`oznacz użytkownika!`)
        }
 
        let osobadobana = message.guild.member(message.mentions.users.first());
 
        if(!osobadobana) {
            return message.reply(`nie znaleziono użytkownika!`)
        }
 
        if(osobadobana.hasPermission("MANAGE_MESSAGES")) { 
            return message.reply(`oznaczona osoba nie może zostać zbanowana!`)
        }
 
        if(!args[1]) {
            return message.reply(`wpisz powód`)
        }
 
        const powod = args.split(1).join(" ");
 
        const embed = new Discord.MessageEmbed()
        .setTitle(`BAN!`)
        .setDescription(`${osobadobana} została permantentnie zbanowana przez <@${message.author.id}>
 
        Powód: ${powod}`)
        .setFooter(`Przestrzegaj regulamin, bo inaczej następny będziesz Ty!`)
        message.channel.send(embed)

        
    }
}