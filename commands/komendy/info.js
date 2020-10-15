const Discord = require(`discord.js`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: "info",
    run: async (bot, message, args) => {

        const wiadomosc_embed = new Discord.MessageEmbed()
        .setTitle(`snoppyBOT | Version 1.0`)
        .setDescription(`*** Informacja snoppyBOT | Version 1.0 ***
        Bot został utworzony przez **AnomiX#0001**
       
        `)
        .setFooter(`snoppyBOT`)
        .setTimestamp()
        .setColor(`#000000`)
        message.channel.send(wiadomosc_embed)
    }
}