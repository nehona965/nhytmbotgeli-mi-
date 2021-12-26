const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://media.discordapp.net/attachments/914530914380443696/921867862208020540/tenor_22.gif")
  .setTitle("**Eğlence!**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("🚀 **:Eğlence Komutları:** 🚀", `🌈`)
  .addField("**\`n!balıktut\` = Balık Tutarsınız**", `**\`n!1vs1\` = 1 VS 1** 🚀`)
  .addField("**\`n!bjk\` = Avatarınıza BJK Efekti Verir**")
  .addField("**\`n!fb\` = Avatarınıza FB Efekti Verir**", `**\`n!gs\` = Avatarınıza GS Efekti verir** 🚀`)
  .addField("**\`n!kartopu\` = Etiketldeiğiniz Kişiye kartopu atarsınız.**")
  .addField("**\`n!özlüsöz\` = Türk Bir Özlü Söz Söyler.**", `**\`n!s*k\` = Etiketlediğiniz kişiyi s*kersiniz.** 🚀`)
  .addField("**\`n!brilliance\` = Avatarınıza Brilliance Efekti Verir.**")
  .addField("**\`n!kralol\` = Avatarınıza Kral Efekti Verir.**", `**\`n!bravery\` = Avatarınıza Bravery Efekti Verir.** 🚀`)
  .addField("**\`n!level\` = Seviyenizi Gösterir.**", `**\`n!korkut\` = İstediğiniz Kişiyi Korkutursunuz** 🚀`)
  .addField("**\`n!fakemesaj\`  = Fake Mesaj Atar**", `**\`n!atatürk-çerçeve\` = Avatarınıza Ataürk Çerçevesi Ekler.** 🚀`)
  .addField("**\`n!trigger\`  = Avatarınıza Triggered Efekti Verir.**", `**\`n!simit\` = Simit Yersiniz.** 🚀`)
  .addField("**\`n!rastgeleşifre\`  = Rastgele Şifre Oluşturur.**", `**\`n!bayrak\` = Bayrak ** 🚀`)
  .addField("**\`n!kaslı\` = Kaslı Olursunuz**", `**\`n!tersrenk\` = Avatarınızın Rengini Tersine Çevirir.** 🚀`)
  .addField("**\`n!sniper\` = Avatarınıza Sniper Efekti Verir.**", `**\`n!wasted\` = Avatarınıza Wasted Efekti Verir.** 🚀`)  
  .addField("**\`n!reklamlar\` = Rek-lam-lar.**", `**\`n!su\` = Nitro Çok Susadı! Ona Su Ver** 🚀`)  
  .addField("**\`n!kurabiye\` = Kurabiye Yersin**", `**\`n!nahçek\` = İstediğin Kişiye Nah Çekersin** 🚀`)   
  .addField("**\`n!kedi\` = Rastgele Kedi Gifleri.**", `**\`n!bilezik\` = Bilezik Alırsınız.** 🚀`) 
  .addField("**\`n!ascii\`**", `**Ascii Yazı Yazmanızı Sağlar.** 🚀`) 
  .addField("**\`n!mcbaşarım\`**", `**Mesajınızı Minecraft Başarımına Dönüştürür.**`) 
  .addField("**\`n!geldim\` & \`n!afk\`** = **AFK Moduna Girmenizi-Çıkmanızı Sağlar**", `**\`n!atatürk\`** = **Atatürk Resimleri Gösterir.** 🚀`) 
  .addField("**\`n!akında\`**", `**\`n!espri\` = Nitro Espri Yapar** 🚀`) 
  .addField("**\`n!gif\` = Rastgele Gifler**", `**\`n!tokat\` = İstediğiniz Kişiye Tokat Atarsınız** 🚀`) 
  .addField("**Eğlence Komutlarının Devamı İçin: \`n!eğlence2\`💨**")
  
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
  aliases: ['e', 'eğ', '1'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence'
};
