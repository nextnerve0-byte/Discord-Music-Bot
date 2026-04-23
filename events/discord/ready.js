const Discord = require("discord.js");

module.exports = async (client) => {
    const statuses = [
        { name: `/play to listen to music 🎵`, type: Discord.ActivityType.Listening },
        { name: `music in ${client.guilds.cache.size} servers`, type: Discord.ActivityType.Playing },
        { name: `/help for commands`, type: Discord.ActivityType.Watching },
        { name: `your favorite songs 🎶`, type: Discord.ActivityType.Listening },
    ];

    let i = 0;
    setInterval(() => {
        client.user.setPresence({
            activities: [statuses[i]],
            status: "online",
        });
        i = (i + 1) % statuses.length;
    }, 10000);

    console.log(`${client.user.tag} is online and ready to play music for you!`);
};
