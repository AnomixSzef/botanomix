const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "propozycja",
  usage: "suggest <wiadomość>",
  description: "Wysłałem twoją propozycję  ",
  category: "Główny",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("✉️ - Proszę podać treść propozycji !")
    } 
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "propozycja" || x.name === "propozycje"))
    
    
    if(!channel) {
      return message.channel.send("Nie posiadasz kanału z nazwą propozycje!")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("Propozycje: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("💬 - Wysłałem twoją propozycje  " )
    
  }
}
