const {sanitizeMessage} = require('../helpers/sanitizeMessage');
const {sendErrorMessage} = require('../services/sendErrorMessage');
const userRepository = require('../repositories/userRepository');

module.exports = async (req, res, next) => {
  const LIST_QUERY = ['/desc', '/price', '/shipping', '/buy'];

  const body = req.body;

  const facebookId = body.entry[0].id;

  const clientId = body.entry[0].messaging[0].sender.id;

  const existingUser = await userRepository.findOne(facebookId);

  if (!existingUser) {
    req.user = false;
    req.clientId = clientId;
    return next();
  }

  if (body.object === 'page') {
    const messageString = body.entry[0].messaging[0].message.text;

    const sanitizedMessage = sanitizeMessage(messageString);

    const query = sanitizedMessage[0];
    const productId = sanitizedMessage[1];

    if (!LIST_QUERY.includes(query)) {
      sendErrorMessage(clientId);
      return res.status(422).send({
        status: 'err_invalid_query',
        message: `The query is invalid.`,
      });
    }

    req.query = query;
    req.productId = productId;
    req.clientId = clientId;
    req.user = true;
  }
  next();
};
