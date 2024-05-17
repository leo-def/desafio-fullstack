import { Test, TestingModule } from '@nestjs/testing';
import { PrismaHealthIndicatorService } from './prisma-health-indicator.service';

describe('PrismaHealthIndicatorService', () => {
  let service: PrismaHealthIndicatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaHealthIndicatorService],
    }).compile();

    service = module.get<PrismaHealthIndicatorService>(PrismaHealthIndicatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
