const healthCheckController = require('../controllers/healthCheckController');
const verifyWebhookController =
require('../controllers/verifyWebhookController');

module.exports = (_, express) => {
  const router = new express.Router({strict: true});

  router.get('/', healthCheckController);

  router.get('/webhook', verifyWebhookController);

  return router;
};
