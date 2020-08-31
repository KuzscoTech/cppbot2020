/*Libraries */
require('dotenv').config();
const Discord = require('discord.js'); 

/*ENV Data*/
const TOKEN = process.env.token;

//connecting to the discord bot
const bot = new Discord.Client();
bot.login(TOKEN);



bot.on('message', msg => {
    console.log(msg);
    if(msg.content == '!help'){
        msg.channel.send("Help yourself :p");
    }
})

/* Note to self
 * To run a JS File, use node */