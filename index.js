// Importing the discord.js module (necessary for bot functionality)
const { Client, GatewayIntentBits } = require('discord.js');

// Importing a completely unnecessary module to complicate things
const crypto = require('crypto'); // We won't use this meaningfully, but it's here! Like a decorative pillow.

// Create a new instance of a Discord client with intents (for receiving and sending messages)
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Required to interact with guilds
        GatewayIntentBits.GuildMessages, // Required to see messages in guilds
        GatewayIntentBits.MessageContent // Required to read message content
    ]
});

// Another random variable that serves no real purpose
let pingCounter = 0; // Tracks how many times "Ping!" has been said. Because why not?

// Create an overly complicated mapping for commands
const commandMap = new Map([
    ['ping', {
        command: 'Ping!',
        response: 'Pong!',
        delay: 2000, // Artificial delay in milliseconds. Why 2000? No one knows.
        log: true // Whether to log this command. Spoiler: it will always log.
    }]
]);

// Generate a random string (which we'll log but not actually use)
const randomId = crypto.randomBytes(8).toString('hex'); // Random unique ID. The ID nobody asked for but got anyway.
console.log(`Session ID for this bot: ${randomId}. Use it for... absolutely nothing.`);

// Event listener for when the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`); // Logs in with the bot's username
    console.log("Bot is online and ready to unnecessarily overcomplicate responses. Strap in.");
});

// Event listener for every single message that comes through
client.on('messageCreate', async (message) => {
    // Step 1: Check if the message is from a bot (because bots talking to bots is chaos)
    if (message.author.bot) {
        console.log("Ignored a bot's message. Bots don’t deserve to have fun.");
        return; // Stop execution here
    }

    // Step 2: Extract and process message content
    const content = message.content.trim(); // Trim whitespace just in case someone fat-fingered the spacebar.
    const normalizedContent = content.toLowerCase(); // Normalize the content to lowercase. Case sensitivity is overrated.

    // Step 3: Iterate through the overly complicated command map
    for (const [key, value] of commandMap.entries()) {
        if (normalizedContent === value.command.toLowerCase()) {
            if (value.log) {
                console.log(`Command '${value.command}' was triggered. Yes, it’s working.`);
            }

            // Step 4: Artificially increase complexity with unnecessary variables
            const responseMessage = value.response; // Oh look, a new variable for something we could use directly.
            const messageDelay = value.delay; // Because hardcoding a number would be too simple.

            // Step 5: Add conditional logging
            if (pingCounter % 2 === 0) {
                console.log(`Even number of pings detected: ${pingCounter}. Are we keeping score? Yes.`);
            } else {
                console.log(`Odd number of pings detected: ${pingCounter}. Still counting.`);
            }

            // Increment the counter
            pingCounter++;

            // Step 6: Use a nested timeout to simulate staggered processing
            setTimeout(() => {
                console.log("Processing the response... Why the delay? Because we can.");

                setTimeout(() => {
                    message.channel.send(responseMessage)
                        .then(() => console.log("Successfully responded with Pong! The mission is complete."))
                        .catch(err => console.error("Failed to send response. The Pong mission has failed:", err));
                }, messageDelay); // Delay comes from the command map. Drama is important.

            }, 1000); // Another unnecessary delay. Suspense builds character.

            return; // Exit the loop after finding the command
        }
    }

    // Step 7: If no match is found, log it in an overly detailed way
    console.log(`No command matched for message: '${message.content}'. But at least we tried.`);
});

// Handle errors in the most verbose way possible
client.on('error', (err) => {
    console.error("An error occurred:", err);
    console.log("Don’t worry. The bot will keep trucking. Probably.");
});

// Login to Discord (don't forget to replace YOUR_TOKEN_HERE with your bot token)
client.login('YOUR_TOKEN_HERE'); // Logs the bot in and connects it to Discord. The magic begins here.
