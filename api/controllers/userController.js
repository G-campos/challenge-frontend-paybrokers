const dbFile = require('../db/db.json')
const logger = require("nodejslogger");

class UserController {
  //login
  authUser (req, res) {
    let userReq = req.body;
    let found = dbFile.users.find(user => user.email === userReq.email)
    let foundIndex = dbFile.users.findIndex(user => user.email === userReq.email)
    try {
      if(found){
        logger.info('Usuario encontrado')
        console.log(dbFile.users[foundIndex])

        res.status(200)
        res.json(dbFile.users[foundIndex])
      } else {
        throw new Error("Usuario não encontrado!");
      }
    } catch (err) {
      logger.error(err)
      res.status(400).send({ error: err })
    }
  }
}

module.exports = new UserController()
