const runtimeEnv = require("./environment");
const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

const player = new Player(client);
client.player = player;
client.config = require('./config/bot.json');
client.config.token_bot = runtimeEnv.DISCORD_TOKEN;
client.emotes = require('./config/emojis.json');
client.filters = require('./config/filters.json');
client.commands = new discord.Collection();

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading event ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./player-events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading player event ${eventName}`);
        client.player.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading command ${commandName}`);
        client.commands.set(commandName, props);
    });
});


client.login(runtimeEnv.DISCORD_TOKEN);
let count = 0;
setInterval(
  () =>
    require("node-fetch")("https://mighty-absorbing-cellar.glitch.me/").then(() =>
      console.log(`[${++count}] My Ping is there`)
    ),
  40000


);
let count2 = 0;
setInterval(
  () =>
    require("node-fetch")("https://dent-tidy-partridge.glitch.me//").then(() =>
      console.log(`[${++count2}] My 2nd Ping is there`)
    ),
  47000


);
