import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { CreateMentorDTO } from '../_dtos/create-mentor.dto';
import { MentorDTO } from '../_dtos/mentor.dto';
import { MentorPaginationParamsDTO } from '../_dtos/pagination/mentor-pagination-params.dto';
import { UpdateMentorDTO } from '../_dtos/update-mentor.dto';
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
          useValue: {
            byId: jest.fn(),
            fetch: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    mentorController = module.get<MentorController>(MentorController);
    mentorService = module.get<MentorService>(MentorService);
  });

  it('should be defined', () => {
    expect(mentorController).toBeDefined();
  });

  describe('find', () => {
    it('should return mentor by id', async () => {
      const mockMentorDTO: MentorDTO = {
        "id": "clw5wh1730000corwl0zgj4g8",
        "name": "Jose Silva",
        "cpf": "11222333444",
        "email": "jose-silva@gmail.com",
        "createdAt": new Date("2024-05-14T04:35:54.063Z"),
        "createdBy": null,
        "updatedAt": new Date("2024-05-14T04:35:54.063Z"),
        "updatedBy": null
      };
      jest.spyOn(mentorService, 'byId').mockResolvedValueOnce({
        "id": "clw5wh1730000corwl0zgj4g8",
        "name": "Jose Silva",
        "cpf": "11222333444",
        "email": "jose-silva@gmail.com",
        "createdAt": new Date("2024-05-14T04:35:54.063Z"),
        "createdBy": null,
        "updatedAt": new Date("2024-05-14T04:35:54.063Z"),
        "updatedBy": null
      });
      const result = await mentorController.find('clw5wh1730000corwl0zgj4g8')
      expect(result).toEqual(plainToInstance(MentorDTO, mockMentorDTO));
    });
  });

  describe('fetch', () => {
    it('should return paginated mentors', async () => {
      const mockMentorPaginationParamsDTO: MentorPaginationParamsDTO = {
        skip: 0,
        take: 10,
        select: ['name'],
        orderBy: { email: 'asc' as 'asc' | 'desc', name: undefined, cpf: undefined, id: undefined },
        filter: { email: 'name@email.com', name: undefined, cpf: undefined, id: undefined },
      };
      const mockMentorDTOs: MentorDTO[] = [{
        "id": "clw5wh1730000corwl0zgj4g8",
        "name": "Jose Silva",
        "cpf": "11222333444",
        "email": "jose-silva@gmail.com",
        "createdAt": new Date("2024-05-14T04:35:54.063Z"),
        "createdBy": null,
        "updatedAt": new Date("2024-05-14T04:35:54.063Z"),
        "updatedBy": null
      },
      {
        "id": "clw5whkgi0001corwxykj7j2z",
        "name": "Joao Silveira",
        "cpf": "11223443551",
        "email": "joao-silveira@email.com",
        "createdAt": new Date("2024-05-14T04:36:19.026Z"),
        "createdBy": null,
        "updatedAt": new Date("2024-05-14T04:36:19.026Z"),
        "updatedBy": null
      }];
      jest.spyOn(mentorService, 'fetch').mockResolvedValueOnce({
        items: [{
          "id": "clw5wh1730000corwl0zgj4g8",
          "name": "Jose Silva",
          "cpf": "11222333444",
          "email": "jose-silva@gmail.com",
          "createdAt": new Date("2024-05-14T04:35:54.063Z"),
          "createdBy": null,
          "updatedAt": new Date("2024-05-14T04:35:54.063Z"),
          "updatedBy": null
        },
        {
          "id": "clw5whkgi0001corwxykj7j2z",
          "name": "Joao Silveira",
          "cpf": "11223443551",
          "email": "joao-silveira@email.com",
          "createdAt": new Date("2024-05-14T04:36:19.026Z"),
          "createdBy": null,
          "updatedAt": new Date("2024-05-14T04:36:19.026Z"),
          "updatedBy": null
        }],
        "count": 2,
        "params": {
          skip: 0,
          take: 10,
          select: ['name'],
          orderBy: { email: 'asc' as 'asc' | 'desc', name: undefined, cpf: undefined, id: undefined },
          filter: { email: 'name@email.com', name: undefined, cpf: undefined, id: undefined },
        }
      }
      );
      const result = await mentorController.fetch(mockMentorPaginationParamsDTO);
      expect(result.items).toEqual(plainToInstance(MentorDTO, mockMentorDTOs));
      expect(result.count).toEqual(2);
      expect(result.params).toEqual(mockMentorPaginationParamsDTO);
    });
  });

  describe('create', () => {
    it('should create mentor', async () => {
      const mockCreateMentorDTO: CreateMentorDTO = {
        "name": "Jose Silva",
        "cpf": "11222333444",
        "email": "jose-silva@gmail.com"
      };;
      const mockMentorDTO: MentorDTO = {
        "id": "clw5wh1730000corwl0zgj4g8",
        "name": "Jose Silva",
        "cpf": "11222333444",
        "email": "jose-silva@gmail.com",
        "createdAt": new Date("2024-05-14T04:35:54.063Z"),
        "createdBy": null,
        "updatedAt": new Date("2024-05-14T04:35:54.063Z"),
        "updatedBy": null
      };;
      jest.spyOn(mentorService, 'create').mockResolvedValueOnce({
        "id": "clw5wh1730000corwl0zgj4g8",
        "name": "Jose Silva",
        "cpf": "11222333444",
        "email": "jose-silva@gmail.com",
        "createdAt": new Date("2024-05-14T04:35:54.063Z"),
        "createdBy": null,
        "updatedAt": new Date("2024-05-14T04:35:54.063Z"),
        "updatedBy": null
      });
      const result = await mentorController.create(mockCreateMentorDTO);
      expect(result).toEqual(plainToInstance(MentorDTO, mockMentorDTO));
    });
  });

  describe('update', () => {
    it('should update mentor', async () => {
      const mockUpdateMentorDTO: UpdateMentorDTO = {
        "name": "Jose Silva",
        "cpf": "11222333444",
        "email": "jose-silva@gmail.com"
      };;
      const mockMentorDTO: MentorDTO = {
        "id": "clw5wh1730000corwl0zgj4g8",
        "name": "Jose Silva",
        "cpf": "11222333444",
        "email": "jose-silva@gmail.com",
        "createdAt": new Date("2024-05-14T04:35:54.063Z"),
        "createdBy": null,
        "updatedAt": new Date("2024-05-14T04:35:54.063Z"),
        "updatedBy": null
      };;
      jest.spyOn(mentorService, 'update').mockResolvedValueOnce({
        "id": "clw5wh1730000corwl0zgj4g8",
        "name": "Jose Silva",
        "cpf": "11222333444",
        "email": "jose-silva@gmail.com",
        "createdAt": new Date("2024-05-14T04:35:54.063Z"),
        "createdBy": null,
        "updatedAt": new Date("2024-05-14T04:35:54.063Z"),
        "updatedBy": null
      });
      const result = await mentorController.update('clw5wh1730000corwl0zgj4g8', mockUpdateMentorDTO);
      expect(result).toEqual(plainToInstance(MentorDTO, mockMentorDTO));
    });
  });

  describe('delete', () => {
    it('should delete mentor', async () => {
      const mockMentorDTO: MentorDTO = {
        "id": "clw5wh1730000corwl0zgj4g8",
        "name": "Jose Silva",
        "cpf": "11222333444",
        "email": "jose-silva@gmail.com",
        "createdAt": new Date("2024-05-14T04:35:54.063Z"),
        "createdBy": null,
        "updatedAt": new Date("2024-05-14T04:35:54.063Z"),
        "updatedBy": null
      };;
      jest.spyOn(mentorService, 'delete').mockResolvedValueOnce({
        "id": "clw5wh1730000corwl0zgj4g8",
        "name": "Jose Silva",
        "cpf": "11222333444",
        "email": "jose-silva@gmail.com",
        "createdAt": new Date("2024-05-14T04:35:54.063Z"),
        "createdBy": null,
        "updatedAt": new Date("2024-05-14T04:35:54.063Z"),
        "updatedBy": null
      });
      const result = await mentorController.delete('clw5wh1730000corwl0zgj4g8');
      expect(result).toEqual(plainToInstance(MentorDTO, mockMentorDTO));
    });
  });

});