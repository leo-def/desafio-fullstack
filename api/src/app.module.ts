import { Module } from '@nestjs/common';
import { MentorModule } from './mentor/mentor.module';
import { PrismaModule } from './prisma/prisma.module';
import { PaginationModule } from './pagination/pagination.module';

@Module({
  imports: [
    PrismaModule,
    MentorModule,
    PaginationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
