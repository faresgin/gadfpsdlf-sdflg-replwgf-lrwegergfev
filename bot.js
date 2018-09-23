const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`صيانه بعد التخريب lol`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

//كود الهيلب الخاص للزوار

client.on('message', message => {
     if (message.content === "*help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **اوامر عامه** ' ,' **الاوامر العامه الخاصه ب الزاور** ')
.addField('     ** **  ' ,' ** ** ')
.addField('     ** *avatar **  ' ,' **لتجيب صورة احد كل العليك تكتب الامر وتمنشنو** ')
.addField('     ** *mhelp **  ' ,' **لعرض اوامر كود الاغاني** ')
.addField('     ** *support **  ' ,' **لسيرفر الدعم الفني** ')
.addField('     ** *inv **  ' ,' **لدعوة البوت لسيرفرك** ')
.addField('     ** *id **  ' ,' **لمعرفة معلوماتك الخاصه** ')
.addField('     ** *server ** ' ,' **لمعرفة معلومات السيرفر**')
.addField('     ** *ping **  ' ,' **لمعرفة سرعة البوت**')
.addField('     ** *bot **  ' ,' **لمعرفة البوت بكم ** ')
.addField('**لدعوة البوت لسيرفرك ..**' , '**http://cutt.us/P8eIJ**')
.addField('     **سيرفر الدعم الفني**  ' ,' **https://discord.gg/Mwyp8d8** ')
 
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});

//هيلب الادمنيه

client.on('message', message => {
     if (message.content === "*help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **اوامر اداريه** ' ,' **الاومر الخاصه ب الادمنيه** ')
.addField('     ** **  ' ,' ** ** ')
.addField('     ** *clear **  ' ,' **لمسح جميع الرسايل ال ب الروم** ')
.addField('     ** *bc **  ' ,' **ل ارسال رسالة لجميع اعضاء السيرفر** ')
.addField('     ** *send **  ' ,' **ل عمل تصويت ب روم ** ')
.addField('     ** *mute **  ' ,' **لعمل ميوت كتابي لحد** ')
.addField('     ** *unmute ** ' ,' **لفك الميوت الكتابي** ')
.addField('     ** *cchat **  ' ,' **لتقفيل الشات ما احد يقدر يكتب به** ')
.addField('     ** *uchat **  ' ,' **لفتح الشات تاني** ')
.addField('     ** **  ' ,' ** ** ')
.addField('**لدعوة البوت لسيرفرك ..**' , '**http://cutt.us/P8eIJ**')
.addField('     **سيرفر الدعم الفني**  ' ,' **https://discord.gg/Mwyp8d8** ')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});

//كود الافتار

client.on('message', message => {
    if (message.content.startsWith("*avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('name bot',client.user.avatarURL) 
      message.channel.sendEmbed(embed);
    }
});


//none


client.login(process.env.BOT_TOKEN);
