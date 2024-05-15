import { Test, TestingModule } from '@nestjs/testing';
import { MentorService } from './mentor.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('MentorService', () => {
  let mentorService: MentorService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MentorService,
        PrismaService,
      ],
    }).compile();

    mentorService = module.get<MentorService>(MentorService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(mentorService).toBeDefined();
  });


  describe('create', () => {
    it('should call prisma.mentor.create with the provided data', async () => {
      const data = 
      {
        "name": "Joao Silveira",
        "cpf": "11223443551",
        "email": "joao-silveira@email.com"
      };
      jest.spyOn(prismaService.mentor, 'create').mockResolvedValueOnce(
        {
          "id": "clw5whkgi0001corwxykj7j2z",
          "name": "Joao Silveira",
          "cpf": "11223443551",
          "email": "joao-silveira@email.com",
          "createdAt": new Date("2024-05-14T04:36:19.026Z"),
          "createdBy": null,
          "updatedAt": new Date("2024-05-14T04:36:19.026Z"),
          "updatedBy": null
        });
      await mentorService.create(data);
      expect(prismaService.mentor.create).toHaveBeenCalledWith({ data });
    });
  });

  describe('update', () => {
    it('should call prisma.mentor.update with the provided id and data', async () => {
      const id = 'clw5whkgi0001corwxykj7j2z';
      const data = {
        "name": "Joao Silveira",
        "cpf": "11223443551",
        "email": "joao-silveira@email.com",
      };
      jest.spyOn(prismaService.mentor, 'update').mockResolvedValueOnce(
          {
            "id": "clw5whkgi0001corwxykj7j2z",
            "name": "Joao Silveira",
            "cpf": "11223443551",
            "email": "joao-silveira@email.com",
            "createdAt": new Date("2024-05-14T04:36:19.026Z"),
            "createdBy": null,
            "updatedAt": new Date("2024-05-14T04:36:19.026Z"),
            "updatedBy": null
          });
      await mentorService.update(id, data);
      expect(prismaService.mentor.update).toHaveBeenCalledWith({ where: { id }, data });
    });
  });

  describe('delete', () => {
    it('should call prisma.mentor.delete with the provided id', async () => {
      const id = 'clw5whkgi0001corwxykj7j2z';
      jest.spyOn(prismaService.mentor, 'delete').mockResolvedValueOnce(
          {
            "id": "clw5whkgi0001corwxykj7j2z",
            "name": "Joao Silveira",
            "cpf": "11223443551",
            "email": "joao-silveira@email.com",
            "createdAt": new Date("2024-05-14T04:36:19.026Z"),
            "createdBy": null,
            "updatedAt": new Date("2024-05-14T04:36:19.026Z"),
            "updatedBy": null
          });
      await mentorService.delete(id);
      expect(prismaService.mentor.delete).toHaveBeenCalledWith({ where: { id } });
    });
  });

});