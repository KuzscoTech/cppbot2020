/*Libraries */
require('dotenv').config();
//Mongo
const mongooseURI = process.env.mongooseURI;
const mongoose = require('mongoose');
var dataTable = require('./table');
var user = require('./models/user');
//Discord 
const Discord = require('discord.js'); 
var dDBCommand = require('./archive/dDBCommands');
//Express
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
//Routers
const signIn = require('./routes/signIn');
/*End of Init */

/* Static Files */
app.use(express.static('./public'));
//Changes
/*Routes*/
app.get('/', (req, res) =>{
    res.sendFile('/public/Website/index.html', {root: __dirname});
 })

app.use('/', signIn);

/*Server Checks */
//Mongo
mongoose.connect(
    mongooseURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"));
//Express
app.listen(port, ()=> {
        console.log(`Server is running on port ${port}`);
})





/* Note to self
 * To run a JS File, use node */

 /*Discord Bot connections
const TOKEN = process.env.token;
const bot = new Discord.Client();
bot.login(TOKEN);

bot.on('message', msg => {
    dDBCommand.msg(msg);
})
*/