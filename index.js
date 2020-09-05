/*Libraries */
require('dotenv').config();
var dataTable = require('./table');
const Discord = require('discord.js'); 
const mongoose = require('mongoose');
var user = require('./models/user');
var dDBCommand = require('./routes/dDBCommands');

/*ENV Data*/
const TOKEN = process.env.token;
const mongooseURI = process.env.mongooseURI;

/*Discord Bot connections*/
const bot = new Discord.Client();
bot.login(TOKEN);

bot.on('message', msg => {
    dDBCommand.msg(msg);
})

/*Mongo Stuff */
mongoose.connect(
    mongooseURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"));

/* Note to self
 * To run a JS File, use node */