import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Mentor } from '../_types/mentor';
import { CreateMentor } from '../_types/create-mentor';
import { UpdateMentor } from '../_types/update-mentor';

@Injectable()
export class MentorService {
    
  constructor(
    private readonly prisma: PrismaService,
  ) {}


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
