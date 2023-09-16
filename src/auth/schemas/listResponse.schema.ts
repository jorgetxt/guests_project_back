// export interface ListResponse {
export interface ListResponse<T> {
  perPage?: number;
  page?: number;
  keyword?: any;
  key?: keyof T;
}
