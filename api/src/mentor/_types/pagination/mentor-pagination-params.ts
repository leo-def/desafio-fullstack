import { PaginationParams } from "src/pagination/_types/params/pagination-params";
import { PaginationParamsFilter } from "src/pagination/_types/params/pagination-params-filter";
import { PaginationParamsOrderBy } from "src/pagination/_types/params/pagination-params-order-by";
import { PaginationParamsSelect } from "src/pagination/_types/params/pagination-params-select";

export type MentorField =  'id' | 'name' | 'cpf' | 'email';

export interface IMentorPaginationParams extends PaginationParams<MentorField> {}


export class MentorPaginationParams implements IMentorPaginationParams {}



export interface IMentorPaginationParamsSelect extends PaginationParamsSelect<MentorField>{}


export interface IMentorPaginationParamsOrderBy extends PaginationParamsOrderBy<MentorField>{}
export class MentorPaginationParamsOrderBy implements IMentorPaginationParamsOrderBy {
  id: "asc" | "desc" | undefined;
  name: "asc" | "desc" | undefined;
  cpf: "asc" | "desc" | undefined;
  email: "asc" | "desc" | undefined;
}

export interface IMentorPaginationParamsFilter extends PaginationParamsFilter<MentorField>{}
export class MentorPaginationParamsFilter implements IMentorPaginationParamsFilter {
  id: string | number | boolean | undefined;
  name: string | number | boolean | undefined;
  cpf: string | number | boolean | undefined;
  email: string | number | boolean | undefined;
}
