exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.RichEmbed()
       .setTitle(`🚫 Banlanan Kullanıcı bulunamadı 🚫`)
       .setColor("RED");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.RichEmbed()
       .setTitle("🚫 Banlistesi | Sunucudan Banlananlar")
       .setColor("RED");
       for(collectionobject of collection)
       {
           var user = collectionobject[1];
           embed.addField(` **${user.tag}**`, `__________ __________`);
       }
       message.channel.send({embed});
     }
   });
 }


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlılar","banliste"],
  permLevel: 0
};

module.exports.help = {
  name: 'banlananlar',
  description: 'Sunucundan Banlanan üyeleri gösterir.',
  usage: 'banlananlar'
};