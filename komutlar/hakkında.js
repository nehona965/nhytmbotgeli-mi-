const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/626082217537437726/635387932089253889/2cae1874410bff02174c08b35f667a48.png")
  .setTitle("✅ Nyhtm Bot Hakkında ✅")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Sunucumuz Nyhtm ✅**",  `Girip yetkili olabilirsin ve sunucumuza boost basarak bize destekte bulunabilirsin!. https://discord.gg/eP3ZPzasrn`)
    .addField("**Botu davet etme 📩**  ", `https://discord.com/oauth2/authorize?client_id=919605494161739776&scope=bot&permissions=805829694`) 
  .addField(" **Botun Kurucusu 👑**", `<@718711851596120094>`)
  .addField(" **Açılış Tarihi 🕒**", `19 Aralık 2021`)
  .addField(" **DUYURU!! ⚠**", `Bize Destekte Bulunursan Nyhtm Destek Sunucu #2022 de Yazan Hediyelerden Alabilirsin !`)
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
    message.react('✅')
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'hakkında',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
 