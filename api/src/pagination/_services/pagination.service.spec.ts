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


  describe('expandObject', () => {
    it('should expand compact object', () => {
      const compactObject = { 'nested.key': 'value' };
      const expandedObject = paginationService.expandObject(compactObject);
      expect(expandedObject).toEqual({ nested: { key: 'value' } });
    });
  });
});