require('dotenv').config();
const app = require('./src/app');
const appPort = process.env.APP_PORT || 3000;

app.listen(appPort, () => console.log(`Server running on port ${appPort}`));
