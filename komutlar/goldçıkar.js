const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcınıyı etiketle.')
  
  db.delete(`gold_${nesne}`)
  
  message.channel.send(`**${nesne}** IDli kullanıcı artık (özel değil) ! <a:tik:632603581031251978>`)
   if(!message.member.roles.has("741224992213303306")) return message.channel.send(`Bu komutu kullanabilmek için \`'yetkilendirme  (özel)'\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.removeRole('652582158187102236')
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'özelçıkar',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};