import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PaginationModule } from './pagination/pagination.module';

@Module({
  imports: [
    PrismaModule,
    PaginationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
