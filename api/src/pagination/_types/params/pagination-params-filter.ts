import { PaginationParamsField } from "./pagination-params-field";

export type PaginationParamsFilter<TField extends PaginationParamsField> =
  Record<TField, boolean | number | string | undefined>;
