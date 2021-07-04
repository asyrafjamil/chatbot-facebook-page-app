exports.sanitizeMessage= function(messageString) {
  return messageString.toLowerCase().trim().split(/[ ,]+/);
};
