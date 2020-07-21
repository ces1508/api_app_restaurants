import BaseRepository from './base.repository'
import { User } from '../models'
import { UserRequestBody } from '../types/user'
import { response } from 'express'

class UserRepository extends BaseRepository {
  constructor () {
    super(User)
  }


  async create ({ email, password }: UserRequestBody) {
    try {
      const validateIfUserExits = await this.findByEmail(email)
      if (validateIfUserExits) throw new Error('user already exits')

      return super.create({ email, password })
    } catch (e) {
      throw new Error(e)
    }
  }

  /**
   *
   * @param email user email to search
   *
   * @returns {object } if user exits, return user record,
   * @returns { null } if user doest not exits
   */
  async findByEmail (email: String) {
    try {
      const user = await User.findOne({ email })
      if (!user) return null
      return user
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new UserRepository()
