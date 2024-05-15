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
