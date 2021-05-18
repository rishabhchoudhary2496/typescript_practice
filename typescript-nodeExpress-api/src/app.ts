import express, { Application, Request, Response } from 'express'
import connectDB from './utils/db'
import routes from './routes'

const app: Application = express()
connectDB()
app.use(express.json())
routes(app)

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'api serving' })
})

app.listen(5000, () => {
  console.log('server running')
})
