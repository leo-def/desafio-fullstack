import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { MentorService } from '../_services/mentor.service';
import { MentorController } from './mentor.controller';
describe('MentorController', () => {
  let mentorController: MentorController;
  let mentorService: MentorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MentorController],
      providers: [
        {
          provide: MentorService,
        },
      ],
    }).compile();

    mentorController = module.get<MentorController>(MentorController);
    mentorService = module.get<MentorService>(MentorService);
  });

  it('should be defined', () => {
    expect(mentorController).toBeDefined();
  });

});