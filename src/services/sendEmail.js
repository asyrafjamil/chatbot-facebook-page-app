require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SG_API_KEY);

/**
 * @description Invoke SendGrid SDK to send email.
 *
 * @param {*} productDetails payload for email
 */
module.exports = async (productDetails) => {
  try {
    const msg = {
      to: process.env.SG_EMAIL_RECEIVER,
      from: {
        email: process.env.SG_EMAIL_SENDER,
        name: `${process.env.SG_EMAIL_NAME}`,
      },
      subject: 'Product Order from Customer!',
      text: productDetails,
    };

    await sgMail.send(msg);
  } catch (error) {
    throw new Error('Email service is down.');
  }
};
