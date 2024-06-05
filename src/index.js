const dotenv = require('dotenv')
dotenv.config()

const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages
  ],
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async(message) => {
  console.log(message)

  if (!message?.author.bot) {
    message.author.send(`${message.content}`);
  } 
})