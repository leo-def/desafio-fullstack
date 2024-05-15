import { Module } from '@nestjs/common';
import { PaginationService } from './_services/pagination.service';

@Module({
    providers: [PaginationService],
    exports: [PaginationService]
})
export class PaginationModule {}
