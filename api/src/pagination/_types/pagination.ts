import { PaginationParams } from './params/pagination-params';
import { PaginationParamsField } from './params/pagination-params-field';

export interface IPagination<
  TData,
  TParams extends PaginationParams<PaginationParamsField>,
> {
  items: Array<TData>;
  params?: TParams;
  count?: number;
}
