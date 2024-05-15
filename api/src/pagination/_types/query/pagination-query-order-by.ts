import { PaginationQueryField } from "./pagination-query-field";

export interface PaginationQueryOrderBy {
  [x: PaginationQueryField]: PaginationQueryOrderBy | 'asc' | 'desc';
}
