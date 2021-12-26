const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("619189451263967263")) return message.channel.send(`Bu komutu kullanabilmek için \`''\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun kanka.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('602398982567624726')
  member.removeRole('573573277763502101')
  member.removeRole('573573277763502101')
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField(`Kayıt işlemi başarılı`, `**Kayıt edilen kullanıcı :** ${kullanıcı} \n**Kayıt işleminde verilen rol :** \`''\``)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'kız',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
}
 