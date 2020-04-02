const crypto = require('crypto');

module.exports = function generateUniqueId(){
    crypto.randomBytes(4).toString('HEX');
}