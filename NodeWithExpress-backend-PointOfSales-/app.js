require('dotenv').config()
const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOption = {
  origin: '*',
  optionSuccessStatus: 200
}

app.use(cors(corsOption))

const router = require('./src/routers')
const conn = require('./src/configs/db')
app.use('/api/v1', router)

// CONNECT PORT
app.listen(port, ()=> {
  console.log(`\n App Running on: http://localhost:${port}`);
})