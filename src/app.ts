import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { Request, Response } from 'express'

import {
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_USER_PASSWORD,
  DATABASE_HOST
} from './secrets/index.secrets'
const app = express()

// middilewares

app.use(helmet())
app.use(bodyParser.json())

// connect to database

console.log(DATABASE_NAME)
console.log(DATABASE_USER)
console.log(DATABASE_USER_PASSWORD)


mongoose.connect(`mongodb://${DATABASE_HOST}`, {
  user: DATABASE_USER,
  pass: DATABASE_USER_PASSWORD,
  db: DATABASE_NAME,
  useFindAndModify: true,
  useNewUrlParser: true
})
.then(() => {
  console.log('database connected')
})
.catch(err => {
  console.log('error connecting to database', err.message)
})

app.use('/', (req: Request, res: Response) => {
  res.send('hola typesript')
})


export default app
