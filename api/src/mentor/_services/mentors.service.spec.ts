import { Test, TestingModule } from '@nestjs/testing';
import { MentorService } from './mentor.service';
import { PaginationService } from '../../pagination/_services/pagination.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('MentorService', () => {
  let mentorService: MentorService;
  let prismaService: PrismaService;
  let paginationService: PaginationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MentorService,
        PrismaService,
        PaginationService,
      ],
    }).compile();

    mentorService = module.get<MentorService>(MentorService);
    prismaService = module.get<PrismaService>(PrismaService);
    paginationService = module.get<PaginationService>(PaginationService);
  });

  it('should be defined', () => {
    expect(mentorService).toBeDefined();
  });


  describe('fetch', () => {
    it('should call paginationService.fetch with the provided params', async () => {
      const params = {"skip":0,"take":5};
      jest.spyOn(paginationService, 'fetch').mockResolvedValueOnce({
        "items": [
          {
            "id": "clw5whkgi0001corwxykj7j2z",
            "name": "Joao Silveira",
            "cpf": "11223443551",
            "email": "joao-silveira@email.com",
            "createdAt": new Date("2024-05-14T04:36:19.026Z"),
            "createdBy": null,
            "updatedAt": new Date("2024-05-14T04:36:19.026Z"),
            "updatedBy": null
          },
          {
            "id": "clw5wi6pn0002corwiwszee88",
            "name": "Luis Otavio",
            "cpf": "99111222333",
            "email": "luis-otavio@customail.com",
            "createdAt": new Date("2024-05-14T04:36:47.867Z"),
            "createdBy": null,
            "updatedAt": new Date("2024-05-14T04:36:47.867Z"),
            "updatedBy": null
          },
        ],
        "params": params,
        "count": 2
      });
      await mentorService.fetch(params);
      expect(paginationService.fetch).toHaveBeenCalledWith(prismaService, 'mentor', params);
    });
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