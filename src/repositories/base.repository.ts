import { Collection } from 'mongoose'
import {
  IRead,
  IWrite,
  IRepositoryCreateResponse,
  IRepositoryUpdateResponse,
  IRepositoryDeletedResponse,
  iBaseRepositoryResponse,
  IRepositoryBaseError
} from './intefaces'

export default  abstract class BaseRepository implements IWrite, IRead  {
  private readonly modelName: Collection
  constructor (model: Collection) {
    this.modelName = model
  }

  async create(data: object): Promise<IRepositoryCreateResponse | IRepositoryBaseError> {
    try {
      const newRegistry = await this.modelName.insert(data)
      return {
        data: newRegistry,
        new_records_id: ['1']
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  async update (id: string, data: Object):Promise<IRepositoryUpdateResponse | IRepositoryBaseError> {
    return {
      data,
      updated: true,
      rows_affected: [id]
    }
  }

  async find (query: Object): Promise<[iBaseRepositoryResponse] | IRepositoryBaseError> {
    return [
      {
        data: {
          id: '1'
        }
      }
    ]
  }

  async findOne (id: String): Promise<iBaseRepositoryResponse |  IRepositoryBaseError> {
    return {
      data: { id }
    }
  }

  async remove (id: String): Promise<IRepositoryDeletedResponse | IRepositoryBaseError> {
    return {
      deleted: true,
      rows_deleted: [id]
    }
  }
}