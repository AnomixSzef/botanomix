const Discord = require(`discord.js`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: "pomoc",
    run: async (bot, message, args) => {

        const wiadomosc_embed = new Discord.MessageEmbed()
        .setTitle(`Pomoc`)
        .setDescription(`***Komendy:***
        !ban  ***|Banuje użytkownika|***
        !kick ***|Wyrzuca użytkownika|***
        !clear  ***|Czyści chat|***
        !info ***|Podaje informacje o autorze|*** 
        !mute ***| Wycisza użytkownika |***
        !unmute ***| Odcisza użytkownika |***
        !propozycja ***| Podaje propozycję np : Dodanie kanału memy | ***
        !pytania *** | Po wpisaniu polecenia bot zadaje ci pytania | ***
        !emoji *** | Wyświetla wszystkie emoji serwera | *** 
        
        `)
        .setFooter(`snoppyBOT | Version 1.0 `)
        .setTimestamp()
        .setColor(`#000000`)
        message.channel.send(wiadomosc_embed)
    }
}