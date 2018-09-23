const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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


//كود الموسيقي

//    Packages
const fs = require("fs");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const UserBlocked = new Set();
 
 
 
 
 
 
 
// bot
 
 
 
 
//help
client.on('message', message => {
    if (message.content === ".dservers") {
    let embed = new Discord.RichEmbed()
 .setColor("#0000FF")
 .addField("**Server: **" , client.guilds.size)
 message.channel.sendEmbed(embed);
   }
if (message.content === 'fhelp') {    
         const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
.addField('***play <name>** ' , '**لتشغيل المسيقى **')
 
.addField('***stop** ' , '**لتوقف المسيقى **')
 
.addField('***skip** ' , '**لتخطي الاغنية **')
 
.addField('**fvol <number>** ' , '**لتغيير الصوت **')
 
.addField('***puase** ' , '**ايقاف بشكل موقت **')
 
.addField('***resume** ' , '**استاناف الموسيقى **')
        .setColor('RANDOM')    
 message.author.sendEmbed(embed);
 message.react("👌")
   }
});
 
 
 
 
  client.on('message', message => {
   if (message.author.bot) return;
    if (message.content === "*mhelp") {
              if(!message.channel.guild) return message.reply(':x:  **The orders are not in your الاوامر مو فى **');
 const embed = new Discord.RichEmbed()
         .setColor("#efa800")
                   .setAuthor(message.author.username, message.author.avatarURL)
          .setThumbnail(message.author.avatarURL)
                .setTimestamp()
   .setDescription(`
                                                   
*play <name> / To Play The Song
 
*stop / To Stop The Song
 
*skip / To Skip The Song
 
*vol <number> / To Change Volume
 
*pause / To Pause The Song
 
*resume / To Resume The Song
**
`);
 
     message.channel.send({embed});
   }
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
///music
client.on('warn', console.warn);
 
client.on('error', console.error);
 
client.on('ready', () => {
console.log(`
------------------------------------------------------
> Logging in...
------------------------------------------------------
Logged in as ${client.user.tag}
Working on ${client.guilds.size} servers!
${client.channels.size} channels and ${client.users.size} users cached!
I am logged in and ready to roll!
LET'S GO!
------------------------------------------------------
-------------------------------------------------------
------------------------------------------------------
----------------------Bot's logs----------------------`);
 
 
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
client.on('message', async msg => {
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
    if (command === `play`) {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('يجب تواجدك بروم صوتي | :x:');
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.send('يجب اعطاء البوت صلاحيه لدخول الروم | :x:');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('يجب اعطاء البوت صلاحيه للتكلم بلروم | :x:');
        }
 
        if (!permissions.has('EMBED_LINKS')) {
            return msg.channel.sendMessage("**يجب اعطاء البوت صلاحيه ``EMBED_LINKS`` | :x:**")
            }
 
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel, true);
            }
            return msg.channel.send(` **${playlist.title}** تمت اضافته علي قائمه التشغيل | :white_check_mark:`);
        } else {
            try {
 
                var video = await youtube.getVideo(url);
 
            } catch (error) {
                try {
                                            var fast = {};
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setDescription(`**اكتب رقم المقطع** :
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join('\n')}`)
                    .setFooter(`${msg.guild.name}`)
                    msg.channel.sendEmbed(embed1).then(message =>{
 
                        message.delete(15000)
 
                    });
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 20000,
                            errors: ['time']
                        })
 
                        }catch(err) {
                        console.error(err);
                        return msg.channel.send('لم يتم اختيار رقم | :x:');
                        }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send('لا يتوفر نتائج بحث | :x:');
                }
        }
 
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (command === `skip`) {
        if (!msg.member.voiceChannel) return msg.channel.send('يجب تواجدك بروم صوتي | :x:');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
        serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
        return undefined;
    } else if (command === `stop`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
        return undefined;
    } else if (command === `vol`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
        if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
    } else if (command === `np`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        const embedNP = new Discord.RichEmbed()
    .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
    } else if (command === `replay`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        const embedNP = new Discord.RichEmbed()
    .setDescription(`سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`)
    msg.channel.send({embed: embedNP})
     return handleVideo(video, msg, msg.member.voiceChannel);
 
    } else if (command === `queue`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        let index = 0;
        const embedqu = new Discord.RichEmbed()
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
        return msg.channel.sendEmbed(embedqu);
    } else if (command === `pause`) {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
        }
        return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    } else if (command === "resume") {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
        }
        return msg.channel.send('لا يوجد شيء حالي في العمل.');
    }
 
    return undefined;
async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`,
        time:`${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,
        eyad:`${video.thumbnails.high.url}`,
        best:`${video.channel.title}`,
        bees:`${video.raw.snippet.publishedAt}`,
        shahd:`${video.raw.kind}`,
        zg:`${video.raw.snippet.channelId}`,
        views:`${video.raw.views}`,
        like:`${video.raw.likeCount}`,
        dislike:`${video.raw.dislikeCount}`,
        hi:`${video.raw.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
    }
    return undefined;
}
 
function play(guild, song) {
    const serverQueue = queue.get(guild.id);
 
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        fetchVideoInfo(`${song.hi}`, function (err, fuck) {
  if (err) throw new Error(err);
  console.log(fuck);
      const yyyy = {}
  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {
    like: `${fuck.likeCount}`,
    dislike: `${fuck.dislikeCount}`
  }
    serverQueue.textChannel.send({embed : new Discord.RichEmbed()
  .setTitle(`**${fuck.title}**`)
  .setURL(fuck.url)
  .addField('وقت الفيديو :' , `${song.time}`, true)
  .addField('اسم القناه :' , `${song.best}`, true)
  .addField('معرف القناه :' , `${song.zg}`, true)
  .addField('الفيديو صنع في :' , `${fuck.datePublished}`, true)
  .addField('مشاهدات :' , `${fuck.views}`, true)
  .addField('لايكات👍 :' , `${fuck.likeCount}`, true)
  .addField('ديس لايكات👎 :' , `${fuck.dislikeCount}`, true)
  .addField('عدد الكومنتات :' , `${fuck.commentCount}`, true)
    .setImage(`${song.eyad}`)
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
    .setColor('#ff0000')
    .setTimestamp()
    }).then(love => {
        love.react('👍').then(r=>{
        love.react('👎').then(r =>{
        love.react('🙌').then(r=> {
    let likee = (reaction, user) => reaction.emoji.name === '👍' && user.id === msg.author.id;
    let dislikee = (reaction, user) => reaction.emoji.name === '👎' && user.id === msg.author.id;
    let cnn = (reaction, user) => reaction.emoji.name === '🙌' && user.id === msg.author.id;
 
    let ll = love.createReactionCollector(likee , {max:5});
    let dd = love.createReactionCollector(dislikee , {max:5});
    let cn = love.createReactionCollector(cnn , {max:5});
 
            ll.on("collect", r => {
              yyyy[msg.guild.id].like++;
    love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${fuck.title}**`)
  .setURL(fuck.url)
  .addField('وقت الفيديو :' , `${song.time}`, true)
  .addField('اسم القناه :' , `${song.best}`, true)
  .addField('معرف الفيديو :' , `${song.zg}`, true)
  .addField('الفيديو صنع في :' , `${fuck.datePublished}`, true)
  .addField('مشاهدين :' , `${fuck.views}`, true)
  .addField('لايكات👍 :' , `${yyyy[msg.guild.id].like}`, true)
  .addField('ديس لايكات👎 :' , `${fuck.dislikeCount}`, true)
  .addField('عدد الكومنتات :' , `${fuck.commentCount}`, true)
    .setImage(`${song.eyad}`)
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
    .setColor('#ff0000')
    .setTimestamp()
});
    })
 
    dd.on("collect", r => {
      yyyy[msg.guild.id].dislike++;
    love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${fuck.title}**`)
  .setURL(fuck.url)
  .addField('وقت الفيديو :' , `${song.time}`, true)
  .addField('اسم القناه :' , `${song.best}`, true)
  .addField('معرف القناه :' , `${song.zg}`, true)
  .addField('الفيديو صنع في :' , `${fuck.datePublished}`, true)
  .addField('مشاهدات :' , `${fuck.views}`, true)
  .addField('لايكات 👍 :' , `${fuck.likeCount}`, true)
  .addField('ديس لايكات 👎 :' , `${yyyy[msg.guild.id].dislike}`, true)
  .addField('عدد الكومنتات :' , `${fuck.commentCount}`, true)
    .setImage(`${song.eyad}`)
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
    .setColor('#ff0000')
    .setTimestamp()
});
})
    cn.on("collect", r => {
    love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${fuck.title}**`)
  .setURL(fuck.url)
  .addField('وقت الفيديو :' , `${song.time}`, true)
  .addField('اسم القناه :' , `${song.best}`, true)
  .addField('معرف القناه :' , `${song.zg}`, true)
  .addField('الفيديو صنع في :' , `${fuck.datePublished}`, true)
  .addField('عدد المشاهدات :' , `${fuck.views}`, true)
  .addField('لايكات 👍 :' , `${fuck.likeCount}`, true)
  .addField('ديس لايكات 👎 :' , `${fuck.dislikeCount}`, true)
  .addField('عدد الكومينتات :' , `${fuck.commentCount}`, true)
    .setImage(`${song.eyad}`)
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
    .setColor('#ff0000')
    .setTimestamp()
});
})
})
})
})
})
})
}
});

//كود السبورت الهو سيرفر الدعم الفني

client.on("message", function(message) {
    if (message.content === "*support") {
    return message.reply("https://discord.gg/Mwyp8d8")
    .catch(console.error);
    }
 
});

//كود الانفيت لاضافة البوت

client.on("message", function(message) {
    if (message.content === "*inv") {
    return message.reply("http://cutt.us/P8eIJ ~ اضغط علي الرابط لأضافة البوت")
    .catch(console.error);
    }
 
});

//كود الايدي الهو المعلومات الشخصيه

client.on('message', message => {
  var prefix = "*"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
 
let d = z.createdAt;          
let n = d.toLocaleString();  
let x;                      
let y;                        
 
if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    
 
.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            
 
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)
 
message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);
 
}
 
});

//كود معلومات السيرفر
  
client.on('message', function(msg) {
    const prefix = '*'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

//كود البينج الهو سرعة البوت

client.on('message', message => {
    if (message.author.bot) return
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('*ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .setFooter(`namebot `,client.user.avatarURL)
         message.channel.send({embed:embed});
                        }
                    });

//كود معلومات البوت

client.on('message', function(message) {
        var prefix = "*";
        var Color = ['bff442','f4d941','ea3c62','ffffff']
        if (message.content.startsWith(prefix + 'bot')) {
            var alpha= new Discord.RichEmbed()
.setColor(`${Color[Math.floor(Math.random() * Color.length)]}`)
.addField('**:crown: Servers**','**[ '+client.guilds.size+' ]**',true)
.addField('**:bust_in_silhouette: Users**','**[ '+client.users.size+' ]**',true)
.addField('**:earth_africa: Room**','**[ '+client.channels.size+' ]**',true)
.setFooter('name  bot',`${client.user.avatarURL}`)
.setTimestamp()
message.channel.send({embed:alpha});
}
});

//بعض الاكواد الاداريه اولهم كود مسح الشات

client.on('message', message => {
if(message.author.bot) return;
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**هل أنت متأكد من أنك تريد مسح الشات؟**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
 
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`جاري حذف الشات`).then(m => m.delete(5000));
var msg;
        msg = parseInt();
 
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` تم مسح الشات ``",
        color: 0x06DF00,
        footer: {
 
        }
      }}).then(msg => {msg.delete(3000)});
 
})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

//ثاني كود معنا هوا البرودكاست البشكل جميل


//كود البرودكاست البدون اي شي فقط الكلام


//كود تغير البلاينج و الصوره والاسم

const adminprefix = "*";
const devs = ['427054141492297728','ايدي اخويك'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'ply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
 
if (message.content.startsWith(adminprefix + 'tw')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});

//none
         
client.login(process.env.BOT_TOKEN);
