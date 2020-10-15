module.exports = {
    name: "unmute",
    category: "moderation",
    run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Przepraszam nie posiadasz uprawnień!"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Nie mam uprawnień do zarządzania rolami .");
      }
  
      const user = message.mentions.members.first();
  
      if (!user) {
        return message.channel.send(
          "Oznacz członka , który ma zostać odciszony"
        );
      }
      
      let muterole = message.guild.roles.cache.find(x => x.name === "Wyciszony")
      
      
   if(user.roles.cache.has(muterole)) {
        return message.channel.send("Podany użytkownik nie posiada roli Wyciszony")
      }
      
      
      user.roles.remove(muterole)
      
      await message.channel.send(`**${message.mentions.users.first().username}** odciszony`)
      
      user.send(`Nie jesteś wyciszony! **${message.guild.name}**`)
  
    }
  };
  