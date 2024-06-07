const axios = require('axios');

const sendDiscordMessage = async (payload, webhookUrl) => {
  let formData = new FormData();
  formData.append('payload_json', JSON.stringify(payload));

  try {
    await axios.post(webhookUrl, formData);
  } catch (error) {
    // Send notification to dev here that sending message failed
    console.error('Error sending Discord message: ', error?.message);
    throw error;
  }
};

module.exports = {
  sendDiscordMessage,
};
