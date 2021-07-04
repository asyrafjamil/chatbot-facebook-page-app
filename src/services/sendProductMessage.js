const request = require('request');

/**
 * @description Send product's detail via Facebook Messenger.
 *
 * @param {*} clientId send message to the client
 * @param {*} response response message
 */

exports.sendProductMessage= async function(clientId, response) {
  const requestBody = {
    'recipient': {
      'id': clientId,
    },
    'message': {
      'text': response,
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
