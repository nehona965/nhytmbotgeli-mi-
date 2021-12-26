const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if(!message.member.roles.has("652582149366480946")) return message.channel.send(`Bu komutu kullanmaya yetkin yok!`);
    if (!message.member.voiceChannel) { return message.channel.send("Ses kanalında olman lazım! <a:onaytiki:632596585410199582>"); }
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('**Kullanıcıyı etiketlemelisin. <a:onaytiki:632596585410199582>**')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  if(!member.voiceChannel) return message.channel.send("Etiketlenen kullanıcı bir ses kanalında değil <a:onaytiki:632596585410199582>").then(m =>m.delete(5000))
  const voiceChannel = message.member.voiceChannel.id;
if(!voiceChannel) return
  member.setVoiceChannel(voiceChannel);
   message.react('✅')
   const voiceChannel1 = message.member.voiceChannel.name;
  let embed= new Discord.RichEmbed()
    .setColor("#000000")
    .setDescription(message.author+" **Tarafından** "+kullanıcı+" **Kullanıcısı** `"+voiceChannel1+"`** Sesli Kanalına Çekildi. <a:onaytiki:632596585410199582>**")
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
   .setTimestamp()  
    message.channel.send(embed).then(m =>m.delete(10000))
 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}
exports.help = {
  name: 'taşı',
  description: " ",
  usage: ' '
}