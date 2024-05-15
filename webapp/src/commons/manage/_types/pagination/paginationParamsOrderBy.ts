import { PaginationParamsField } from "./paginationParamsField";

export type PaginationParamsOrderBy<TField extends PaginationParamsField> =
Record<TField, 'asc' | 'desc'>;
