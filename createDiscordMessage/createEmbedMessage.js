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
            { name: '***Ask Price***', value: `${eventData.askPrice.toString()}$`, inline: true },
            { name: '***Amount***', value: `${eventData.amount.toString()}$`, inline: true },
            { name: '***Date***', value: `<t:${eventData.timestamp}:R>\u200B\n`, inline: true },
            {
              name: '***Multiplier***',
              value:
                eventData.multiplier > 1
                  ? createEmojiMessage(`${eventData.multiplier.toString()}x`, greenEmoji)
                  : eventData.multiplier < 1
                  ? createEmojiMessage(`${eventData.multiplier.toString()}x`, redEmoji)
                  : `${eventData.multiplier.toString()}x`,
              inline: true,
            },
            { name: '***State***', value: eventData.state, inline: true },
            {
              name: '***Type***',
              value: eventData.type,
              inline: true,
            },
            {
              name: 'Links',
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
