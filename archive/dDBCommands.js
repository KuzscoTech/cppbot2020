var dataTable = require('../table');
var user =  require('../models/user');

//Discord 
module.exports.msg = function (msg){
    if(msg.channel.name == 'drzeke' && msg.content == '!help 1101'){
        msg.channel.send("Does Sanjay not understand again?");
    } //else if(msg.content = '!help 1101') {
       // msg.reply("poor you learn on your own :P");
  //  }
    if(msg.content == '!idiot'){
        msg.channel.send("R u an idiot?");
    }
    if(msg.content == '/info'){
        user.find({}, function(err, result){
            if(err){
                console.log(err);
            } else {
                //(JSON.stringify(result, undefined, 4))
                console.log(result);
                msg.channel.send(
                    (`Class: ${result[0].class.modules[0].name}\n`)
                   // `Meeting time: ${time.upper()}`
                )
            }
        });
    //    dataTable = new dataTable("ECE 1101", "Intro to Electrical Analysis", "7:00 AM", 3, "Dr.Zeke");
    //    console.log(dataTable);
    //    msg.channel.send(JSON.stringify(dataTable, undefined, 4));
    }
}