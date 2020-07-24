import BaseRepository from './base.repository'
import {
  IRepositoryCreateResponse
} from './intefaces'
import { User } from '../models'
import { UserRequestBody } from '../types/user'
class UserRepository extends BaseRepository {
  constructor () {
    super(User)
  }

  async create ({ email, password }: UserRequestBody): Promise<IRepositoryCreateResponse> {
    try {
      const validateIfUserExits = await this.findByEmail(email)
      if (validateIfUserExits !== null) return { error: true, message: 'user already exits', code: 8, status: 422 }
      return await super.create({ email, password })
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
  async findByEmail (email: String): Promise<object|null> {
    try {
      const user = await User.findOne({ email })
      return user
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new UserRepository()
