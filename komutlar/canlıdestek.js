const Discord = require('discord.js')
exports.run = async(client, message, args) => {
  
  
const emoji1 = message.client.emojis.get('<a:onaytiki:632596585410199582>');
const emoji2 = message.client.emojis.get('<a:onaytiki:632596585410199582>');
const emoji3 = message.client.emojis.get('<a:onaytiki:632596585410199582>');   //buralara dokunmayın!
const emoji4 = message.client.emojis.get('<a:onaytiki:632596585410199582>');
const emoji5 = message.client.emojis.get('<a:onaytiki:632596585410199582>');
const emoji6 = message.client.emojis.get('<a:onaytiki:632596585410199582>');
const emoji7 = message.client.emojis.get('<a:onaytiki:632596585410199582>');
      let isEnabled;
      message.reply("<a:onaytiki:632596585410199582> Canlı Destek Talebinizi Gönderdiniz En Kısa Sürede Sizle İletişime Geçeceklerdir!  ");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "739888661360934943"
      const embed = new Discord.RichEmbed()
        .addField('Uyarı!', `Destek Talebi Var!`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek İsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajı**: ${mesaj}`)
        .setFooter("Canlı Destek ")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('<a:tik:632603581031251978> Destek Talebi Geldi **Sayın Yetkili** KABUL Etmek İstiyorsan `katıl` Red Etmek İstiyorsan `kapat` Yazabilirsin! Yazabilirsin')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katıl') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('<a:onaytiki:632596585410199582> Bağlantı ZAMAN Aşımına Uğradı')
      if (reason === 'aborted') {
        message.reply('⛔️ Red Edildi')
        client.channels.get(destekKanal).send('<a:onaytiki:632596585410199582> Bağlantı Başarıyla Red Edildi ✅ ')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('⚠️ Canlı Desteğe Bağlanılıyor')
        client.channels.get(destekKanal).send('⚠️ Bağlanıldı')
        chan.send(`${message.author}`)
        chan.send('Destek Talebiniz Yetkili Tarafından Alındı📜 ')
        chan.send(' <a:tik:632603581031251978> ')
        chan.send('<a:onaytiki:632596585410199582> Destek Talebini Kapatmak İstiyorsan `kapat` Yazabilirsin')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send('❌ Arama Kapatıldı')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('❌ Arama Karşı Taraftan Kpatıldı')
              if (message.channel.id === destekKanal) chan.send('Arama Karşı Taraftan Kapatıldı ❌')
              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`**${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`<a:onaytiki:632596585410199582> **${message.author.tag}**: ${message.content}`)
          }
          contact(client)
        })
      }
    })
}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'canlıdestek',
  description: 'CanlÄ± Destek Tablebi OluÅturur.',
  usage: ''
};