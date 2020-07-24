export interface iBaseRepositoryResponse {
  data?: Object
}

export interface IRepositoryBaseError {
  error?: Boolean
  message?: string
  code?: number
  status?: number
}

export interface IRepositoryCreateResponse extends iBaseRepositoryResponse, IRepositoryBaseError {
  new_records_id?: [String]
}

export interface IRepositoryUpdateResponse extends iBaseRepositoryResponse {
  rows_affected: [String]
  updated: Boolean
}

export interface IRepositoryDeletedResponse extends Partial<iBaseRepositoryResponse> {
  rows_deleted: [String]
  deleted: Boolean
}

export interface IWrite {
  create: (data: Object) => Promise<IRepositoryCreateResponse>
  update: (id: String, data: Object) => Promise<IRepositoryUpdateResponse>
  remove: (id: string) => Promise<IRepositoryDeletedResponse>
}

export interface IRead {
  findOne: (id: String) => Promise<iBaseRepositoryResponse>
  find: (query: Object) => Promise<[iBaseRepositoryResponse]>
}
