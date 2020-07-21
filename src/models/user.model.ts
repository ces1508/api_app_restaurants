import mongoose, { Document, Schema } from 'mongoose'
import { UserAuthToken, UserProvider } from '../types'

export interface UserDocument extends Document {
  email: string,
  password: string
  passwordResetToken: string,
  passwordResetTokenExpired: Date,
  providers: [UserProvider]
  tokens: UserAuthToken
}

const UserSchema = new Schema({
  email: String,
  password: String,
  passwordResetToken: String,
  passwordResetTokenExpired: Date,
  providers: [],
  tokens: []
})

export default mongoose.model('User', UserSchema)