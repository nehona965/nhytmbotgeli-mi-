const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://media.discordapp.net/attachments/914530914380443696/921867862208020540/tenor_22.gif")
  .setTitle("**Eğlence!**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("🌈 **:Eğlence Komutları 2:** 🌈", `🌈`)
  .addField("**\`n!hayvan\` = Rastgele Hayvan Gifleri**", `**\`n!stresçarkı\` = Stres Çarkı Çevirirsiniz** 🎮`) 
  .addField("**\`n!pikaçu\` = Pikaçhuu <3** 🎮`")
  .addField("**\`n!yala\` = Dondurma Yalarsınız :)**", `**\`n!troll\` = TROLLL** 🎮`)
  .addField("**\`n!şanslısayım\` = Şanslı Sayınızı Gösterir.**", `**\`n!tekmeat\` = İstediğiniz Kişiye Tekme Atarsınız** 🎮`)
  .addField("**\`n!sarıl\` = Sarılırsınız!**", `**\`n!opendoor\` = FBİ OPEN THE DOOR!** 🎮`)
  .addField("**\`n!tkm\` = Bestle Taş-Kağıt-Makas Oynarsınız. **", `**\`n!starwars\` = StarWars izlersiniz.** 🎮`) 
  .addField("**\`n!kahkaha\` = Kahkaha Atarsınız**", `**\`n!sigara\` = Sigara Sağlığa Zararlıdır! ** 🎮`) 
  .addField("**\`n!urfagönder\` = Urfa Yersiniz.**", `**\`n!sins-aga\` = Johnny Sins Gifi.** 🎮`) 
  .addField("**\`n!arkadaşın\` = Türk Arkadaşını Bilir.**", `**\`n!söv\` = İstediğiniz Kişiye Söversiniz.(Sövmek Kötüdür!)** 🎮`) 
  .addField("**\`n!emojiyazı\` = Mesajınızı Emoji Metnine Dönüştürür. **", `**\`n!8ball\` = Sihirli 8ball Sorularınızı Yanıtlar.** 🎮`) 
  .addField("**\`n!avatarım\` = Avatarınızı Gösterir.**")
  .addField("**\`n!koş\` = Koşarsınız **", `**\`n!çayiç\` = Çay İçersiniz.** 🎮`) 
  .addField("**\`n!çekiç\` = İstediğiniz Kişiye Çekiç Atarsınız**", `**\`n!yumruk-at\` = İstediğiniz Kişiye Yumruk Atarsınız** 🎮`) 
  .addField("**\`n!sunucubilgi\` = Sunucu Bilgisini Verir**", `**\`n!kullanıcıbilgim\` = Kullanıcı Bilginizi Verir.** 🎮`) 
  
  .setImage("https://images-ext-1.discordapp.net/external/KEMWWIByrnvqlmtxem-Cy4y2dFp-mf-RPtpKhZ-Ibzw/https/www.hareketligifler.net/data/media/562/cizgi-hareketli-resim-0184.gif")

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
  aliases: ['e2', 'eğ2', '4'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence2',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence2'
};
