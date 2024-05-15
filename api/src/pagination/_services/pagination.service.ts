import { PrismaClient } from '@prisma/client';
import { PaginationParams } from '../_types/params/pagination-params';
import { PaginationParamsField } from '../_types/params/pagination-params-field';
import { PaginationQuery } from '../_types/query/pagination-query';
import { IPagination } from '../_types/pagination';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PaginationService {
  public paramsToQuery<
    T extends PaginationParams<PaginationParamsField>,
    Extra = object,
  >(params: T, extra: Extra): PaginationQuery & Extra {
    const { skip, take, select, orderBy, filter } = params;
    return {
      ...({
        ...(skip ? { skip } : {}),
        ...(take ? { take } : {}),
        ...(select
          ? {
            select: this.expandObject(
              select.reduce((prev, curr) => ({ ...prev, [curr]: true }), {}),
            ),
          }
          : {}),
        ...(orderBy
          ? {
            orderBy: this.expandObject(orderBy),
          }
          : {}),
        ...(filter
          ? {
            where: this.expandObject(filter),
          }
          : {}),
      } as PaginationQuery),
      ...((extra ?? {}) as Extra),
    };
  }


  public fetch<TData, TParams extends PaginationParams<PaginationParamsField>>(
    prisma: PrismaClient,
    repository: string,
    params: TParams,
  ): Promise<IPagination<TData, TParams>> {
    const query: PaginationQuery = this.paramsToQuery(params, undefined);
    return prisma.$transaction(async (tx) => {
      const count = await tx[repository].count({ where: query.where });
      const items = await tx[repository].findMany(query);
      let extra = undefined;
      if (params.extra) {
        extra = await tx[repository].findMany({
          where: params.extra,
          select: params.select,
          orderBy: params.orderBy,
        });
      }
      return this.dataToResponse(items, params, count, extra);
    });
  }

  public dataToResponse<
    TData,
    TParams extends PaginationParams<PaginationParamsField>,
  >(
    items: Array<TData>,
    params: TParams,
    count?: number,
    extra?: Array<TData>,
  ): IPagination<TData, TParams> {
    return {
      items,
      params,
      count,
      extra,
    } as IPagination<TData, TParams>;
  }

  public expandObject(compactObject: { [x: string]: unknown }) {
    const expandedObject = {};

    for (const key in compactObject) {
      if (!key) {
        continue;
      }
      const value = compactObject[key];
      const keys = key.split('.');

      let currentLevel = expandedObject;

      keys.forEach((nestedKey, index) => {
        if (!currentLevel[nestedKey]) {
          if (index === keys.length - 1) {
            currentLevel[nestedKey] = value;
          } else {
            currentLevel[nestedKey] = {};
          }
        }
        currentLevel = currentLevel[nestedKey];
      });
    }

    return expandedObject;
  };
}
