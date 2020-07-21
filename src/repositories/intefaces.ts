export interface iBaseRepositoryResponse {
  data: Object
}

export interface IRepositoryCreateResponse extends iBaseRepositoryResponse {
  new_records_id: [String]
}

export interface IRepositoryUpdateResponse extends iBaseRepositoryResponse {
  rows_affected: [String],
  updated: Boolean
}

export interface IRepositoryDeletedResponse extends Partial<iBaseRepositoryResponse> {
  rows_deleted: [String],
  deleted: Boolean
}

export interface IRepositoryBaseError {
  error: Boolean,
  information_error: string
}

export interface IWrite {
  create (data: Object): Promise<IRepositoryCreateResponse | IRepositoryBaseError>,
  update(id: String, data: Object): Promise<IRepositoryUpdateResponse | IRepositoryBaseError>,
  remove (id: string): Promise<IRepositoryDeletedResponse | IRepositoryBaseError>
}

export interface IRead {
  findOne (id: String): Promise<iBaseRepositoryResponse | IRepositoryBaseError>,
  find (query: Object): Promise<[iBaseRepositoryResponse] | IRepositoryBaseError>
}