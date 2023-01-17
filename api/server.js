const express = require('express')
const cors = require('cors')
const router = require('./routes')
const logger = require('nodejslogger')

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

const delay = () => new Promise(res => setTimeout(res, 2000))

app.get('/', (req, res) => {
  res.send('Tá on the line!')
  logger.info("Request /")
})

app.listen(3001, () => {
  logger.info("Start server")
  logger.info("Listening on 3001")
})
