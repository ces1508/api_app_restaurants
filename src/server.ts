import app from './app'
// import { appHandlerError } from './middlewares'

const PORT = process.env.PORT ?? 3000

// app.use(appHandlerError)

const server = app.listen(PORT, () => {
  console.log('server running on port ', PORT)
})

export default server
