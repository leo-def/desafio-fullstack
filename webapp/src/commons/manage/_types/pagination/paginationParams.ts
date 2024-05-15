
import { PaginationParamsField } from "./paginationParamsField";
import { PaginationParamsFilter } from "./paginationParamsFilter";
import { PaginationParamsOrderBy } from "./paginationParamsOrderBy";

  export interface PaginationParams<TField extends PaginationParamsField> {
    skip?: number;
    take?: number;
    select?: Array<TField>;
    orderBy?: PaginationParamsOrderBy<TField>;
    filter?: PaginationParamsFilter<TField>;
  }
  