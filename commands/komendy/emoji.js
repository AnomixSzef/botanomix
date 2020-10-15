const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "emoji",
  description: "Wyświetla wszystkie emotikony!",
  category: "utility",
  run: async (bot, message, args) => {
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return bot.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new MessageEmbed()
      .setTitle(`Emotikony serwera : ${message.guild.name}.`)
      .setDescription(
        `**Animacje [${Animated}]**:\n${EmojisAnimated}\n\n**Standardowe [${EmojiCount}]**:\n${Emojis}\n\n**Wszystkie emotikony [${OverallEmojis}]**`
      )
      .setColor(`RANDOM`);
    message.channel.send(Embed);
  },
};
