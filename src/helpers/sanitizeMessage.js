/**
 * Helper method
 *
 * @description Remove white spaces and other unnecessary strings
 * from the message and split the messages to an array
 * @param {*} messageString
 */

exports.sanitizeMessage= function(messageString) {
  return messageString.toLowerCase().trim().split(/[ ,]+/);
};
