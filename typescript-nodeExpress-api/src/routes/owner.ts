import express, { IRouter, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import Owner from '../models/owner'

const router: IRouter = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const ownersList = await Owner.find({})
  res.json({ owners: ownersList, message: 'success' })
})

router.post(
  '/',
  body('fullName').exists().isString().trim().escape(),
  body('email').exists().isEmail().normalizeEmail().trim().escape(),
  body('phone').exists().isString().trim().escape(),
  body('address').exists().isString().trim().escape(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { fullName, email, phone, address } = req.body
    const owner = await Owner.create({
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
    })
    return res.status(200).json({ owner: owner, message: 'sucess' })
  }
)

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const ownerWithId = await Owner.findOne({ _id: id })
  res.status(200).json({ owner: ownerWithId })
})

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const ownerDeleted = await Owner.deleteOne({ _id: id })
  res.status(200).json({ owner: ownerDeleted })
})

export default router
