import { Test, TestingModule } from '@nestjs/testing';
describe('MentorService', () => {
  let mentorService: MentorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MentorService,
      ],
    }).compile();

    mentorService = module.get<MentorService>(MentorService);
  });

  it('should be defined', () => {
    expect(mentorService).toBeDefined();
  });

});