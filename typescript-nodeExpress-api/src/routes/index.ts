import ownerRoute from './owner'
import petRoute from './pet'
import { Application } from 'express'

export default function (app: Application) {
  app.use('/api/owner', ownerRoute)
  app.use('/api/pet', petRoute)
}
