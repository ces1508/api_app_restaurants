/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IRead,
  IWrite,
  IRepositoryCreateResponse,
  IRepositoryUpdateResponse,
  IRepositoryDeletedResponse,
  iBaseRepositoryResponse
} from './intefaces'

export default abstract class BaseRepository implements IWrite, IRead {
  private readonly model: any
  constructor (model: any) {
    this.model = model
  }

  async create (data: object): Promise<IRepositoryCreateResponse> {
    try {
      const newRegistry = await this.model.create(data)
      return {
        data: newRegistry,
        new_records_id: ['1']
      }
    } catch (e) {
      const error = new Error()
      error.message = e.message
      e.status = 500
      throw error
    }
  }

  async update (id: string, data: Object): Promise<IRepositoryUpdateResponse> {
    return {
      data,
      updated: true,
      rows_affected: [id]
    }
  }

  async find (query: Object): Promise<[iBaseRepositoryResponse]> {
    const data = await this.model.find({})
    return data
  }

  async findOne (id: String): Promise<iBaseRepositoryResponse> {
    return {
      data: { id }
    }
  }

  async remove (id: String): Promise<IRepositoryDeletedResponse> {
    throw new Error('method not implement yet')
  }
}
