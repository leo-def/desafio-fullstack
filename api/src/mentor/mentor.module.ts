import { Module } from '@nestjs/common';
import { MentorController } from './_controllers/mentor.controller';
import { MentorService } from './_services/mentor.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PaginationModule } from 'src/pagination/pagination.module';

@Module({
  imports: [PrismaModule, PaginationModule],
  controllers: [MentorController],
  providers: [MentorService],
  exports: [MentorService]
})
export class MentorModule {}
