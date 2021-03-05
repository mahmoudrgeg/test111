const express = require("express");
const app = express();

app.listen(() => console.log("Starting..."));
app.use('/ping', (req, res) => {
  res.send(new Date());
});
///All Copy Right Reserved For: Shuruhatik  in YT

const discord = require("discord.js");
const shuruhatik = new discord.Client();
const ytdl = require('ytdl-core');
const moment = require("moment");
const ms = require("ms");
const pretty = require("pretty-ms");
////////تعديلات  التذكير
////////////بوت تذكير
//////////لاتغير اشي فوق
var azkarbyshuruhatik = {
  imageembed: "",////لا تغير اشي
  colorembed: "",////لون رساله التذكير
  channelname: "bots",//// اسم الروم الي بدك يكون الكلام فيها
  time: "600",////وقت الكلام
};
var facts =[
 '/tfollow el8us',
] 

TOKEN = ""
//////لاتغيير اشي
setInterval(() => {
  let azkarchannel = shuruhatik.channels.cache.filter(c => c.name.toLowerCase() === azkarbyshuruhatik.channelname).random()
  var fact = Math.floor(Math.random() * facts.length);
 	var embed = new discord.MessageEmbed()
   .setColor(azkarbyshuruhatik.colorembed || "")
  .setThumbnail(`${azkarbyshuruhatik.imageembed|| ""}`)
  .setTitle("")///All Copy Right Reserved For: Shuruhatik  in YT
  .setTimestamp()/////All Copy Right Reserved For: Shuruhatik  in YT
  .setDescription(facts[fact])
  .setFooter("")
	azkarchannel.send(embed)
}, azkarbyshuruhatik.time);

///All Copy Right Reserved For: Shuruhatik  in YT

shuruhatik.login(process.env.token);
