/*Libraries */
require('dotenv').config();
var dataTable = require('./table');
const Discord = require('discord.js'); 

/*ENV Data*/
const TOKEN = process.env.token;

//connecting to the discord bot
const bot = new Discord.Client();
bot.login(TOKEN);



bot.on('message', msg => {
    //console.log(msg.channel);
    if(msg.channel.name == 'drzeke' && msg.content == '!help 1101'){
        msg.channel.send("Does Sanjay not understand again?");
    } //else if(msg.content = '!help 1101') {
       // msg.reply("poor you learn on your own :P");
  //  }
    if(msg.content == '!idiot'){
        msg.channel.send("R u an idiot?");
    }
    if(msg.content == '!data'){
       dataTable = new dataTable("ECE 1101", "Intro to Electrical Analysis", "7:00 AM", 3, "Dr.Zeke");
       console.log(dataTable);
       msg.channel.send(JSON.stringify(dataTable, undefined, 4));
    }
})

    // if(msg.content == "!memes"){
    //     msg.channel.send("Kuzsco is too lazy to make this command yet D:");
    // }
    // if(msg.content == "?rich"){
    //     msg.channel.send("This bitch too poor to be rich, don't even got a island yet psshhh");
    // }
    // if(msg.content == "!bigbrain"){
    //     msg.channel.send('Big Brain more like peebrain idiot :angry:');
    // }
    // //console.log(msg.author.username)
    // if(msg.author.username == 'Remon20'){
    //     //msg.channel.send("STOP TALKING");
    // }

/* Note to self
 * To run a JS File, use node */