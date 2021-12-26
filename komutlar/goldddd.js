const Discord = require('discord.js');


exports.run = function(client, message) {
//Komutun Kodları
//evet tek satırlık kod işimize bakıc
/*Mesajın bulnduğu sunucudaki kanalları listele ve m değerini ver */ 
//Deniyoruz..
//Evet az önce sorn çıktı düzelttik.
//Şimdi bu komut bütün kanalları siliyor, 4 satırlık kod ile kanalları silip yeni bir kanal
//oluşturup mesaj atmayı göstericem.
message.guild.createChannel('! Nehona_965 Kullanıcısı', 'text').then(zzz => {
//Kanal üzerinde işlem yap
//İşlem yapmak için z değişkenini kullanıyouz
zzz.send('```Sunucunuz gold oldu.```')//Mesaj gönderiyoruz
//deneyelim
//bir dahaki videoda sunucu adı değiştirme ve sunucu iconu değiştirme komutunu kodlayacağız
//Like atmayı unutmatyın
//♥ 
})
};

exports.conf = {
enabled: true,//True => Komut açık, False => Komut kapalı 
guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
aliases: ['kanallarısil'],//Komutun farklı kullanımları ÖR: !ping, !p
permLevel: 5 //kimlerin kullanabileceğini (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
name: 'kullanıcıx',//Komutun adı (Komutu girerken lazım olucak)
description: 'Kanalları siliyo',//Komutun Açıklaması
usage: 'kanallarısil' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}