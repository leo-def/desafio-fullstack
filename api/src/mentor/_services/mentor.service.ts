import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Mentor } from '../_types/mentor';
import { CreateMentor } from '../_types/create-mentor';

@Injectable()
export class MentorService {
    
  constructor(
    private readonly prisma: PrismaService,
  ) {}


  async create(data: CreateMentor): Promise<Mentor> {
    return await this.prisma.mentor.create({ data });
  }
}
