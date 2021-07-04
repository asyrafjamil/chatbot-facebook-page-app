const {User} = require('../models');

/**
 * Repository method
 *
 * @description Make DB calls to User model
 *
 */

exports.store = async function(facebookId) {
  return await User.create({
    facebookId: facebookId,
  });
};

exports.findOne = async function(facebookId) {
  return await User.findOne({
    where: {
      facebookId: facebookId,
    },
  });
};
