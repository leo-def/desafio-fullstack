import { Test, TestingModule } from '@nestjs/testing';
import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  let paginationService: PaginationService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaginationService,
      ],
    }).compile();

    paginationService = module.get<PaginationService>(PaginationService);
  });

  it('should be defined', () => {
    expect(paginationService).toBeDefined();
  });

  describe('paramsToQuery', () => {
    it('should transform pagination params into query object', () => {
      const params = {
        skip: 1,
        take: 10,
        select: ['id', 'name'],
        orderBy: { id: 'asc' as 'asc' | 'desc' },
        filter: { email: 'name@email.com' },
      };
      const extra = { someExtraParam: 'value' };
      const query = paginationService.paramsToQuery(params, extra);
      expect(query).toEqual({
        skip: 1,
        take: 10,
        select: { id: true, name: true },
        orderBy: { id: 'asc' },
        where: { email: 'name@email.com' },
        someExtraParam: 'value',
      });
    });
  });

  describe('fetch', () => {
    it('should fetch paginated data from Prisma', async () => {
      const prismaMock = {
        mentor: {
          count: jest.fn().mockResolvedValueOnce(10),
          findMany: jest.fn().mockResolvedValueOnce(['item1', 'item2']),
        },
      };

      const prismaClient = {
        "$transaction": (async (callback) => callback(prismaMock))
        }
      const params = {
        skip: 0,
        take: 10,
        select: ['id', 'name'],
        orderBy: { id: 'asc' as 'asc' | 'desc' },
        filter: { email: 'name@email.com' },
      };
      const result = await paginationService.fetch(prismaClient as any, 'mentor', params);
      expect(result).toEqual({
        items: ['item1', 'item2'],
        params,
        count: 10,
        extra: undefined,
      });
      expect(prismaMock.mentor.count).toHaveBeenCalled();
      expect(prismaMock.mentor.findMany).toHaveBeenCalled();
    });
  });

  describe('dataToResponse', () => {
    it('should transform data into pagination response', () => {
      const items = ['item1', 'item2'];      const params = {
        skip: 0,
        take: 10,
        select: ['id', 'name'],
        orderBy: { id: 'asc' as 'asc' | 'desc' },
        filter: { email: 'name@email.com' },
      };
      const count = 10;
      const extra = ['extra1', 'extra2'];
      const result = paginationService.dataToResponse(items, params, count, extra);
      expect(result).toEqual({
        items,
        params,
        count,
        extra,
      });
    });
  });

  describe('expandObject', () => {
    it('should expand compact object', () => {
      const compactObject = { 'nested.key': 'value' };
      const expandedObject = paginationService.expandObject(compactObject);
      expect(expandedObject).toEqual({ nested: { key: 'value' } });
    });
  });
});