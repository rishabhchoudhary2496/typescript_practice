import express, { IRouter, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import Pet from '../models/pet'
import Owner from '../models/owner'
import mongoose from 'mongoose'

const router: IRouter = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const petList = await Pet.find({}).populate('ownerId')
  res.json({ pets: petList, message: 'success' })
})

router.post(
  '/',
  body('name').exists().isString().trim().escape(),
  body('type').exists().isString().trim().escape(),
  body('age').exists().isNumeric().trim().escape(),
  body('breed').exists().isString().trim().escape(),
  body('ownerId').exists().isString().trim().escape(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, type, age, breed, ownerId } = req.body
    if (!mongoose.Types.ObjectId.isValid(ownerId)) {
      return res.status(400).json({ error: 'not a valid object id' })
    }

    const owner = await Owner.findOne({ _id: mongoose.Types.ObjectId(ownerId) })

    if (!owner)
      return res.status(400).json({ error: 'Owner not found with this id' })

    const pet = await Pet.create({
      name: name,
      type: type,
      age: age,
      breed: breed,
      ownerId: ownerId,
    })
    return res.status(200).json({ pet: pet, message: 'sucess' })
  }
)

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const petWithId = await Pet.findOne({ _id: id })
  res.status(200).json({ pet: petWithId })
})

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const petDeleted = await Pet.deleteOne({ _id: id })
  res.status(200).json({ pet: petDeleted })
})

export default router
