const protectedRoutes = require('./protectedRoutes');
const publicRoutes = require('./publicRoutes');

module.exports = (app, express) => {
  app.use('/v1', publicRoutes(app, express));
  app.use('/v1', protectedRoutes(app, express));
};
