const db = require('quick.db');

exports.run = async (client, message, args, dil) => {
if(args[0] === "kapat") {
  db.delete(`sunucular.${message.guild.id}.koruma`)
  message.channel.send(`${client.emojiler.evet}| Self-BOT Koruması Kapatıldı`)
} else if(args[0] === "aç") {
  db.set(`sunucular.${message.guild.id}.koruma`, `aktif`)
  message.channel.send(client.emojiler.evet + '| Nyhtm Bot Koruması Başarıyla **Aktif** Olarak Ayarlandı!')
} else return message.reply(dil.doğrukullanım)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4,
  kategori: "Koruma-Sistem"
};

exports.help = {
  name: 'koruma',
  description: 'Spambotların saldırılarını engeller',
  usage: 'koruma <aç/kapat>'
};