/**
 * Single action controller method
 *
 * @route GET /v1/webhook
 * @description To verify the integrated webhook with the FB Messenger App
 * @access public
 *
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = (req, res) => {
  try {
    const verifyToken = process.env.FB_VERIFY_TOKEN;

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token === verifyToken) {
      res.status(200).send({
        status: 'success',
        message: challenge,
      });
    }
  } catch {
    res.status(501).send({
      status: 'err_service_unavailable',
      message: 'The service is currently not available.',
    });
  }
};
