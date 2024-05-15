import { FetchParams } from "../_types/status/params/fetchParams";
import { PaginationParams } from "../../pagination/_types/paginationParams";
import { PaginationParamsField } from "../../pagination/_types/paginationParamsField";


export class ApiPaginationService {
  static fromFetchParams<TField extends PaginationParamsField>(
    params: FetchParams
  ): PaginationParams<TField> {
    const { page, limit, sort, filter, select } = params;
    return {
      skip: ((page || 1) - 1) * (limit ?? 0),
      ...(limit ? { take: limit } : {}),
      ...(select ? { select } : {}),
      ...(filter
        ? {
            where: {
              ...filter.reduce(
                (prev, curr) => ({
                  ...prev,
                  [curr.field]: { contains: curr.value },
                }),
                {}
              ),
            },
          }
        : {}),
      ...(sort
        ? {
            orderBy: {
              ...sort.reduce(
                (prev, curr) => ({ ...prev, [curr.field]: curr.order }),
                {}
              ),
            },
          }
        : {}),
    } as PaginationParams<TField>;
  }
}
