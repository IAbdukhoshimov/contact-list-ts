import mongoose, { Schema, Document } from "mongoose"

export interface IContact extends Document {
    _id: string
    name: string
    description: string
}

let ContactSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    task: {
        type: String
    },
    description: {
        type: String
    }
})

export default mongoose.model<IContact>("Contact", ContactSchema)
