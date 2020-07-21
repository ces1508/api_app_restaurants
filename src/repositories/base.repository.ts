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
  private readonly model: any
  constructor (model: any) {
    this.model = model
  }

  async create(data: object): Promise<IRepositoryCreateResponse | IRepositoryBaseError> {
    try {
      const newRegistry = await this.model.create(data)
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
    const data = await this.model.find({})
    return data
  }

  async findOne (id: String): Promise<iBaseRepositoryResponse |  IRepositoryBaseError> {
    return {
      data: { id }
    }
  }

  async remove (id: String): Promise<IRepositoryDeletedResponse | IRepositoryBaseError> {
    throw new Error('method not implement yet')
  }
}