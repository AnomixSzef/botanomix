const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Wycisz każdego co łamie zasady",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Przepraszam nie posiadasz uprawnień!! "
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Nie mam uprawnień do zarządzania rolami.");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send("Oznacz członka , którego chcesz wyciszyć.")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("Nie możesz wyciszyć tej osoby!!");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Proszę podaj powód do wyciszenia członka")
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Wyciszony")
    
    
      if(!muterole) {
      return message.channel.send("Ten serwer nie posiada roli o nazwie Wyciszony`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("Podany użytkownik został już  wyciszony")
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(`Wyciszyłeś **${message.mentions.users.first().username}** Powód  \`${reason}\``)
    
    user.send(`Zostałeś  wyciszony!**${message.guild.name}** Powód  \`${reason}\``)
    
    

    
  }
};
