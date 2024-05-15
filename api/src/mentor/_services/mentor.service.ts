import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Mentor } from '../_types/mentor';
import { CreateMentor } from '../_types/create-mentor';
import { UpdateMentor } from '../_types/update-mentor';
import { PaginationService } from '../../pagination/_services/pagination.service';
import { MentorPaginationParams } from '../_types/pagination/mentor-pagination-params';
import { MentorPagination } from '../_types/pagination/mentor-pagination';

@Injectable()
export class MentorService {
    
  constructor(
    private readonly prisma: PrismaService,
    private readonly pagination: PaginationService
  ) {}

  async fetch(
    params: MentorPaginationParams,
  ): Promise<MentorPagination> {
    return await this.pagination.fetch(this.prisma, 'mentor', params);
  }

  async create(data: CreateMentor): Promise<Mentor> {
    return await this.prisma.mentor.create({ data });
  }

  async update(id: string, data: UpdateMentor): Promise<Mentor> {
    return await this.prisma.mentor.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Mentor> {
    return await this.prisma.mentor.delete({
      where: { id }
    });
  }

}
