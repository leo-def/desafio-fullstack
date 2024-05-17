import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { PrismaHealthIndicatorService } from './_services/prisma-health-indicator.service';
import { PrismaModule } from '../prisma/prisma.module';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule, PrismaModule],
  controllers: [HealthController],
  providers: [PrismaHealthIndicatorService]
})
export class HealthModule {}
