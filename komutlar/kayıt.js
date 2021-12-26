const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("652582157503692817")) return message.channel.send(`Bu komutu kullanabilmek için \`'「 🔑 」Kayıt Sorumlusu'\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Bre adamı etiketle.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('652582160099835917')
  member.removeRole('652582161647403010')
  member.removeRole('652582161647403010')
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField(`Teyit başarılı kankam`, `${kullanıcı} Teyit Suyuyla Yıkanmışsın Sunucuya hoşgeldin.`)
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
  name: 'kayıt',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
}