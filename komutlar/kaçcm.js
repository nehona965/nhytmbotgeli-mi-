const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
   var espriler = [' **Senin Malafatın  18CM ** 🍆 ' ,'**Senin Malafatın  11CM ** 🍆' ,'**Senin Malafatın 32CM  ** 🍆' ,'**Senin Malafatın  35CM ** 🍆' ,'**Senin Malafatın  8CM  ** 🍆' ,'**Senin Malafatın  65CM  ** 🍆' ,'**Senin Malafatın 5CM  ** 🍆' ,'**Senin Malafatın 31CM  ** 🍆' ,'**Senin Malafatın  14CM ** 🍆' ,'**Senin Malafatın  1CM ** 🍆'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};