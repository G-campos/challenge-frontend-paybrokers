const dbFile = require('../db/db.json')
const logger = require("nodejslogger");

class UserController {
  //login
  authUser (req, res) {
    let userReq = req.body;
    let found = dbFile.users.find(user => user.email === userReq.email)
    let foundIndex = dbFile.users.findIndex(user => user.email === userReq.email)

    console.log('userReq =>', userReq)
    console.log('found =>', found)

    try {
      if(found.password === userReq.password){
        logger.info('Usuario encontrado')
        console.log(dbFile.users[foundIndex])

        res.status(200)
        res.json(dbFile.users[foundIndex])
      } else if ( found.password !== userReq.password) {
        logger.error("Senha errada!")
        throw new Error("Senha errada!");
      } else if ( !userReq ) {
        logger.error("Request invalida")
        throw new Error("Request invalida");
      } else {
        logger.error("Usuario não encontrado!")
        throw new Error("Usuario não encontrado!");
      }
    } catch (err) {
      logger.error(err)
      res.status(400).send({ error: err })
    }
  }
}

module.exports = new UserController()
