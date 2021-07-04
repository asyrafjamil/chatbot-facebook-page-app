const {sendGreetingMessage} = require('../services/sendGreetingMessage');
const {sendProductMessage} = require('../services/sendProductMessage');
const {filterProduct} = require('../helpers/filterProduct');
const sendEmail = require('../services/sendEmail');
const userRepository = require('../repositories/userRepository');

/**
 * Single action controller method
 *
 * @route POST /v1/webhook
 * @description To handle webhook's events
 * @access protected
 *
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
  try {
    const body = req.body;
    const clientId = req.clientId;
    const facebookId = body.entry[0].id;
    const user = req.user;

    if (!user) {
      await userRepository.store(facebookId);

      sendGreetingMessage(clientId);

      return res.status(200).send({
        status: 'success',
        message: `Greeting's message is sent.`,
      });
    }

    const query = req.query;

    const productId = req.productId;

    const product = filterProduct(productId);

    switch (query) {
      case '/desc':
        sendProductMessage(clientId, product[0].description);
        break;
      case '/price':
        sendProductMessage(clientId, product[0].price);
        break;
      case '/shipping':
        sendProductMessage(clientId, product[0].shipping);
        break;
      case '/buy':
        sendEmail(product[0]);
    }

    res.status(200).send({
      status: 'success',
      message: `Product's message is sent.`,
    });
  } catch (error) {
    return res.status(501).send({
      status: 'err_service_unavailable',
      message: error,
    });
  }
};
