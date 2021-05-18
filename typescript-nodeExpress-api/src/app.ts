import express, { Application, Request, Response } from 'express'
import connectDB from './utils/db'
import routes from './routes'

const app: Application = express()
connectDB()
app.use(express.json())
routes(app)

const add = (a: number, b: number) => {
  return a + b
}

app.get('/', (req: Request, res: Response) => {
  res.json({ sum: add(10, 4) })
})

app.listen(5000, () => {
  console.log('server running')
})
