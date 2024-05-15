import { PaginationParamsField } from "./pagination-params-field";

export type PaginationParamsOrderBy<TField extends PaginationParamsField> =
  Record<TField, 'asc' | 'desc' | undefined>;