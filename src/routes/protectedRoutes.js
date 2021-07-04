const handleWebhookEventController =
require('../controllers/handleWebhookEventController');
const validateQuery = require('../middlewares/validateQuery');

module.exports = (_, express) => {
  const router = new express.Router({strict: true});

  router.use(validateQuery);

  router.post('/webhook', handleWebhookEventController);

  return router;
};
