const request = require('request');

/**
 * @description Send greeting's message via Facebook Messenger.
 *
 * @param {*} clientId send message to the client
 */

exports.sendGreetingMessage= async function(clientId) {
  const messages = ['How are you?', `I hope you're doing well`,
    `I hope you're having a great day.`];

  const randomMessage = messages[Math.floor(Math.random()*messages.length)];

  const requestBody = {
    'recipient': {
      'id': clientId,
    },
    'message': {
      'text': randomMessage,
    },
  };

  // Send the HTTP request to the Messenger Platform
  request({
    'uri': 'https://graph.facebook.com/v2.6/me/messages',
    'qs': {'access_token': process.env.PAGE_ACCESS_TOKEN},
    'method': 'POST',
    'json': requestBody,
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!');
    } else {
      console.error('Unable to send message:' + err);
    }
  });
};
