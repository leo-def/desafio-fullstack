import { Module } from '@nestjs/common';
import { MentorModule } from './mentor/mentor.module';
import { PrismaModule } from './prisma/prisma.module';
import { PaginationModule } from './pagination/pagination.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    PrismaModule,
    MentorModule,
    PaginationModule,
    HealthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
