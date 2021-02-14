const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
    
    message.delete();
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`${client.user.username} Commands!`)
    .setDescription(`Use ${Prefix}Help <Command Name> For More Command Information!` + 
    "\n\n**Fun**\n`Avatar, Coinflip, Howgay, Meme, Rate, 8ball, Dicksize, Ascii, Choose, Hack, Randomnumber`" + "\n\n" + "**Moderation**\n`Clear, Mute, Unmute, Tempmute, Kick, Ban, Unban, Tempban, Warn, Warnings, ResetWarns`" + "\n\n"+
    "**Information**\n`Help, Weather, Userinfo, Serverinfo, Ping`")
    .addField("Economy Commands", "`work` `beg` `rob` `pay` `balance` `profile` `withdraw` `deposit` `daily` `weekly` `store` `buy` `sell` `roulette` `slots` `storeinfo [item]`")
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
    
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
    /*const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('e!'))return;  


    let embed = new Discord.MessageEmbed()
    .setTitle("Money Man Help Centre [Prefix e!]")
    .addField("Economy Commands", "`work` `beg` `rob` `pay` `balance` `profile` `withdraw` `deposit` `daily` `weekly` `store` `buy` `sell`")
    .addField("Gambling Commmands", "`roulette` `slots`")
    .addField("Economy Extra Commands", "`storeinfo [item]`")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help",
  aliases: [""]
}

    */
  } 
};
