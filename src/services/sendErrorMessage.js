const request = require('request');

/**
 * @description Send error message via Facebook Messenger.
 *
 * @param {*} clientId send message to the client
 */
exports.sendErrorMessage= async function(clientId) {
  const message = `Choose the following command:
  \n/desc {productId} for the product's description, 
  \n/price {productId} for the product's price,
  \n/shipping {productId} for the shipping fee,
  \n/buy {productId} to purchase the product `;

  const requestBody = {
    'recipient': {
      'id': clientId,
    },
    'message': {
      'text': message,
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
