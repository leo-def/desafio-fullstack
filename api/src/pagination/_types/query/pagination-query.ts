import { PaginationQueryFilter } from "./pagination-query-filter";
import { PaginationQueryOrderBy } from "./pagination-query-order-by";
import { PaginationQuerySelect } from "./pagination-query-select";

export interface PaginationQuery {
  skip?: number;
  take?: number;
  select?: PaginationQuerySelect;
  orderBy?: PaginationQueryOrderBy;
  where?: PaginationQueryFilter;
}
