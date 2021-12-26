const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcını etiketle. Eğer olmuyorsa bir sunucuya özeldir. By KAAN')
  
  db.set(`gold_${nesne}`, 'gold')
  
  message.channel.send(`**${nesne}** kullanıcı artık özel! <a:tik:632603581031251978>`)
  if(!message.member.roles.has("741224992213303306")) return message.channel.send(`Bu komutu kullanabilmek için \`'yetkilendirme  (özel)'\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('652582158187102236')
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'özelyap',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};