const Discord = require('discord.js')
const bot = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]}, {partials: ["MESSAGE", "CHANNEL", "REACTION"]})
require("dotenv").config();
const ms = require('ms')
const axios = require('axios').default;
const fs = require('fs');
const { MessageEmbed } = require('discord.js')

bot.login('OTU4NDEwMjc2Mjg4NDc1MTM2.YkM7IA.qIvgybyTx6WxPyPzC-1qLHHqmDY')

bot.once('ready', () => {
    console.log('Bot is online!');
});

bot.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content == "Hello") {
        message.channel.send('How can i help you ?')
      } else if (message.content == "How are you ?") {
        message.channel.send('I am Fine, you ?')
      } else if (message.content == "Bye") {
        message.channel.send('B-Bye see you soon!')
      } else if (message.content == "i want to take admission in diploma CO") {
        message.channel.send('Ok! First you need to be qulified in SSC Board')
      } else  if (message.content == "what is the fee structure ?") {
        message.channel.send(`Computer - 62,000\r\nMechanical - 50,000\r\nCivil - 46,000\r\nElectrical - 45,000`)
      } else if (message.content == "what documents do we need ?") {
        const Embed = new MessageEmbed()
        .setTitle('Sir Dr. M. S. Gosavi Polytechnic Institute')
        .setURL('https://gespoly.org')
        .setThumbnail('https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-1/46057178_302782800574930_6234915804974940160_n.jpg?stp=dst-jpg_p148x148&_nc_cat=107&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=FPJ_lwjMVcwAX8PyL17&_nc_ht=scontent-bom1-2.xx&oh=00_AT_0NQaSrtlsq-ybjQntzu07UcpnZ61XeIbxTh3QVs_jew&oe=6267ACE3')
        .setColor(`RANDOM`)
        .setDescription(`👆 Click on this to visit college Website\r\n**You Need**\r\nAadhar Card\r\n2 Photos\r\n10Th Marksheet\r\nLC`)

        const Embed1 = new MessageEmbed()
        .setTitle('An example of admission form')
        .setColor(`RANDOM`)
        .setImage('https://files.instapdf.in/wp-content/uploads/pdf-thumbnails/2020/05/ap-meeseva-colleges-admission-application-form-2304.webp')
        message.channel.send({embeds: [Embed]})
        message.channel.send({embeds: [Embed1]})
      } else  if (message.content == "Me too") {
        message.channel.send(`Good To Know!`)
      } else if(message.content == "what is the process of admission ?") {
        const Embed = new MessageEmbed()
        .setTitle('Admission procedure for college')
        .setDescription('Do your registration by clicking on the “Apply Now” button, fill appropriate information, authenticate the details and Sign In to the online admission portal. Select appropriate programs, as per your preferences through the "Apply Program" option. Applicants have a choice to select the required program.')
        message.channel.send({embeds: [Embed]})
      } else if(message.content == 'which subjects are there ?') {
        message.channel.send(`**There will be 7 subjects**\r\n(Subjects Will Be Change After 1st Semister)\r\n1. English\r\n2. Basic Science-Physics\r\n3. Basic Science-Chemistry\r\n4. Basic Mathematics\r\n5. Engineering Graphics\r\n6. Fundamentals Of ICT\r\n7. Workshop`)
      } else if(message.content == 'thank you for your help') {
        message.channel.send(`My pleasure!`)
      } else if(message.content == 'what services do your college have ?') {
        const Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**We Have:-**')
        .setDescription('`Career counselling`\r\n`Campus healthcare`\r\n`Networking training and events`\r\n`Language center`\r\n`Study training and workshops`\r\n`Library`')
        message.channel.send({embeds: [Embed]})
      } else {
          message.channel.send("I don't get it can you say it again")
      }
    
})