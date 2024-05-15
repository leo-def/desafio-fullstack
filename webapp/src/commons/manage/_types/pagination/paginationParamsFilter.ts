import { PaginationParamsField } from "./paginationParamsField";

export type PaginationParamsFilter<TField extends PaginationParamsField> =
Record<TField, boolean | number | string>;
