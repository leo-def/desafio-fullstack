import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(prismaService).toBeDefined();
  });

  describe('onModuleInit', () => {
    it('should connect to the database on module initialization', async () => {
      const connectSpy = jest.spyOn(prismaService, '$connect').mockResolvedValueOnce(undefined);
      await prismaService.onModuleInit();
      expect(connectSpy).toHaveBeenCalled();
    });
  });

  describe('onModuleDestroy', () => {
    it('should disconnect from the database on module destruction', async () => {
      const disconnectSpy = jest.spyOn(prismaService, '$disconnect').mockResolvedValueOnce(undefined);
      await prismaService.onModuleDestroy();
      expect(disconnectSpy).toHaveBeenCalled();
    });
  });
});