import { PaginationQueryField } from "./pagination-query-field";

export interface PaginationQuerySelect {
  [x: PaginationQueryField]: PaginationQuerySelect | boolean;
}
