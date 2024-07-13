const jwt = require('jsonwebtoken')
const helpers = require('./response')

module.exports = {
  verify: (req, res, next) => {
    // console.log(req.headers);
      try {
          const bearerToken = req.headers['authorization'];
          const token = bearerToken.split(' ')[1]
          const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
          req.body.user = decoded
          next();
      } catch (err) {
          return helpers.response(res, null, 401, "Token invalid")
      }

  }

}