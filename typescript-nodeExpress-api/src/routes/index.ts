import ownerRoute from './owner'
import { Application } from 'express'

export default function (app: Application) {
  app.use('/api/owner', ownerRoute)
}
