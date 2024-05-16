import { PaginationParams } from "../_types/pagination/paginationParams";
import { PaginationParamsField } from "../_types/pagination/paginationParamsField";
import { FetchParams } from "../_types/status/params/fetchParams";


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
