import { model, Schema, Model, Document, Types } from 'mongoose'

interface IPet extends Document {
  name: string
  type: string
  age: number
  breed: string
  ownerId: string
}

const petSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  ownerId: {
    type: Types.ObjectId,
    ref: 'Owner',
    required: true,
  },
})

const Pet: Model<IPet> = model('Pet', petSchema)

export default Pet
