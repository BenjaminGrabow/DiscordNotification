// Types of events
// - created buy order, created sell order,
// - filled buy order, filled sell order
// - we don't send notifications for cancelled orders

const messageContent = {
  'buy-created': 'A buy order has been created',
  'sell-created': 'A sell order has been created',
  'buy-filled': 'A buy order has been filled',
  'sell-filled': 'A sell order has been filled',
};

const redEmoji = ':red_circle:';
const greenEmoji = ':green_circle:';
const greenColor = 0x00ff00;
const redColor = 0xff0000;
const buyType = 'buy';
const sellType = 'sell';
const createdState = 'created';
const filledState = 'filled';
const username = 'BasedVC';
const avatar_url = 'https://vc-cdn.s3.eu-central-1.amazonaws.com/webapp/logo.jpg';

const askPrice = 1300;
const amount = 2300;

const exampleEventData = {
  type: sellType, // 'buy' | 'sell',
  projectName: 'Tatsumeeko',
  projectLogo:
    'https://basedvc.fund/_next/image?url=https%3A%2F%2Fcdn.basedvc.fund%2Fresearch%2Ftatsumeeko%2Flogo.jpg&w=256&q=75',
  askPrice, // asking price of otc deal
  amount, // amount of allocation being traded
  timestamp: '1717770314', // Date of the notification or trade action.
  multiplier: Number((askPrice / amount).toFixed(2)), // highlighted in green if greater than 1, and in red if less than 1. Multiplier: askPrice / amount
  state: filledState, // Current state of the trade (created, cancelled, filled).
  otcChannelLink: 'https://basedvc.fund/app/otc?market=tatsumeeko', // A clickable link that directs users to the relevant OTC trading channel on Discord. // `https://basedvc.fund/app/otc?market=${projectName}`
};

module.exports = {
  exampleEventData,
  messageContent,
  redEmoji,
  greenEmoji,
  greenColor,
  redColor,
  buyType,
  sellType,
  createdState,
  filledState,
  username,
  avatar_url,
};
