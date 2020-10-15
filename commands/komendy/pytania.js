const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Najlepszy język programowania?",
    options: ["JavaScript/TypeScript", "Python", "LUA",],
    correct: 1,
  },
  {
    title: "Najlepsze jedzenie?",
    options: ["Domowe", "Miastowe"],
    correct: 1,
  },

  {
    title: "Czy snoppyBOT jest autorskim botem?",
    options: ["TAK", "NIE"],
    correct: 1,
  },

  {
    title: "Najlepszy sklep? ",
    options: ["Żabka", "Biedronka"],
    correct: 2,
  },
];
module.exports = {
  name: "pytanie",
  description: "Pytania - Na serwer",
  category: "fun",
  run: async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Odpowiedz na tą wiadomość podając poprawny numer pytania! Masz 15 sekund!`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["czas"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`✅ - Masz rację!`);
      } else {
        return message.channel.send(`❌ - Zła odpowiedź.`);
      }
    } catch (e) {
      return message.channel.send(`Nie odpowiedziałeś na pytanie!`);
    }
  },
};
