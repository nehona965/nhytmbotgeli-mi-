const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni Sunucuna Davet Etmek İçin Tıkla ! ✅")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot Yapımıcısı: <@718711851596120094>** ✅")
  .setFooter('Nyhtm', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .setURL('https://discord.com/oauth2/authorize?client_id=919605494161739776&scope=bot&permissions=805829694')
  .setTitle("Destek Sunucuma Gelmek için Tıkla ! ✅")
  .addField("[Destek Sunucuma Gelmek için Tıkla ! ✅](https://discord.gg/uPA7geUuWs)", )
  .setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  aciklama: 'Bot ile ilgili bilgi verir.',
  kullanim: 'davet'
};