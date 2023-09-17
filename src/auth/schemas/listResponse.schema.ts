import { FindOptionsOrderValue } from 'typeorm';

// export interface ListResponse {
export interface ListResponseInfo<T> {
  perPage?: number;
  page?: number;
  keyword?: any;
  key?: keyof T;
  order?: FindOptionsOrderValue;
  total?: number;
}

export interface ListResponse<T> {
  data: T[];
  info: ListResponseInfo<T>;
}
