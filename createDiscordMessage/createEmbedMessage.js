const {
  username,
  avatar_url,
  greenEmoji,
  redEmoji,
  buyType,
  greenColor,
  redColor,
  messageContent,
} = require('./discordMessageConstants');
const { createEmojiMessage } = require('./discordMessageHelpers');

const createEmbedMessage = (eventData) => {
  try {
    const embedMessage = {
      username,
      avatar_url,
      embeds: [
        {
          title: eventData.projectName,
          thumbnail: {
            url: eventData.projectLogo,
          },
          fields: [
            { name: '__**Ask Price**__', value: `${eventData.askPrice}$`, inline: true },
            { name: '__**Amount**__', value: `${eventData.amount}$`, inline: true },
            { name: '__**Date**__', value: `<t:${eventData.timestamp}:R>\u200B\n`, inline: true },
            {
              name: '__**Multiplier**__',
              value:
                eventData.multiplier > 1
                  ? createEmojiMessage(`${eventData.multiplier}x`, greenEmoji)
                  : eventData.multiplier < 1
                  ? createEmojiMessage(`${eventData.multiplier}x`, redEmoji)
                  : `${eventData.multiplier}x`,
              inline: true,
            },
            { name: '__**State**__', value: eventData.state, inline: true },
            {
              name: '__**Type**__',
              value: eventData.type,
              inline: true,
            },
            {
              name: '__**Links**__',
              value: `[OTC channel](${eventData.otcChannelLink})`,
            },
          ],
          url: eventData.otcChannelLink,
          color: eventData.type === buyType ? greenColor : redColor,
          footer: {
            text: username,
            icon_url: avatar_url,
          },
          timestamp: new Date(),
        },
      ],
      content: messageContent[`${eventData.type}-${eventData.state}`],
    };

    return embedMessage;
  } catch (error) {
    // send notification to dev here that creating discord message failed
    console.error('Error in createEmbedMessage: ', error?.message);
    throw error;
  }
};

module.exports = {
  createEmbedMessage,
};
