// used to run the function locally
// 1. create a .env file in the root directory and add the DISCORD_WEBHOOK_URL secret
// 2. run: yarn install
// 3. run: node index.js

const dotenv = require('dotenv');
const { createEmbedMessage } = require('./createDiscordMessage/createEmbedMessage');
const { sendDiscordMessage } = require('./sendDiscordMessage');
const { exampleEventData } = require('./createDiscordMessage/discordMessageConstants');

dotenv.config();

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

if (!webhookUrl) {
  console.error('No discord webhook url provided');
  process.exit(1);
}

const main = async () => {
  try {
    const createdEmbedMessage = createEmbedMessage(exampleEventData);

    await sendDiscordMessage(createdEmbedMessage, webhookUrl);
  } catch (error) {
    // catch error but don't throw it, to avoid crashing the app.
    // The child functions already throw the error and send the required notification to devs.
    console.error('Error in main: ', error?.message);
  }
};

main();
