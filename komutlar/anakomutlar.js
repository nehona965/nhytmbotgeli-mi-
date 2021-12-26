const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://media.discordapp.net/attachments/914530914380443696/921867862208020540/tenor_22.gif")
  .setTitle("**Ana**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**:scales: Ana Komutlar :scales:**", ` \`n!reklamtaraması\` = Oynuyor Yerinde Reklam Yapanları Bulur. ✅ \n \`n!çekiliş\` = Sunucudaki Üyeler Arasında Çekiliş Yaparsınız. ✅ \n \`n!tavsiye\` = Tavsiyenizi Yapımcıya İletir ✅ \n \`n!banned\` = Admin Banhammeri ✅ \n \`n!öneri\` = Önerilerinizi Yapımcıya İletir ✅ \n \`n!ailemiz\` = Ailemizi Gösterir. ✅ \n \`n!yardım\` = Bot komutlarını atar. ✅ \n \`n!bilgi\` = Bot kendisi hakkında bilgi verir. ✅ \n \`n!ping\` = Bot gecikme süresini söyler. ✅ \n \`n!davet\` = Bot davet linkini atar. ✅ \n  \`n!istatistik\` = Bot istatistiklerini söyler. ✅`)
  
 .setImage("https://media.discordapp.net/attachments/922046953544646692/922079921352892456/standard_2.gif")
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
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
  aliases: ['ana', 'ak', '3'],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: 'Ana komutları gösterir.',
  usage: 'anakomutlar'
};
