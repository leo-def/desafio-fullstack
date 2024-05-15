import { PaginationParamsField } from "./pagination-params-field";
import { PaginationParamsFilter } from "./pagination-params-filter";
import { PaginationParamsOrderBy } from "./pagination-params-order-by";
import { PaginationParamsSelect } from "./pagination-params-select";

export interface PaginationParams<TField extends PaginationParamsField> {
  skip?: number;
  take?: number;
  select?: PaginationParamsSelect<TField>;
  orderBy?: PaginationParamsOrderBy<TField>;
  filter?: PaginationParamsFilter<TField>;
  extra?: Array<PaginationParamsFilter<TField>>;
}