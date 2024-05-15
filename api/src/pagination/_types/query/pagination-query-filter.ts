import { PaginationQueryField } from "./pagination-query-field";

export interface PaginationQueryFilter {
  [x: PaginationQueryField]: PaginationQueryFilter | boolean | number | string;
}
