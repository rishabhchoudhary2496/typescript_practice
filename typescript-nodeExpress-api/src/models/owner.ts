import { model, Schema, Model, Document } from 'mongoose'

interface IOwner extends Document {
  fullName: string
  email: string
  phone: string
  address: string
}

const ownerSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
})

const Owner: Model<IOwner> = model('Owner', ownerSchema)

export default Owner
