const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(`🌟 Vote Link : https://top.gg/bot/579325429299675136/vote`)
    .setDescription(`**:star2: Bana Oy Verdiğin İçin Şimdiden Çok Teşekkür Ederim ! :star2:**`);
    
      message.channel.send(embed);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'vote',
  description: 'Bota Oy Verirsiniz!.',
  usage: 'vote'
};