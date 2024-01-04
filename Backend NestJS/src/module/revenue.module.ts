import { Module } from '@nestjs/common';
import { RevenueController } from './../controller/revenue.controller';
import { RevenueService } from './../services/revenue.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenue } from 'src/entities/revenue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Revenue])],
  controllers: [RevenueController],
  providers: [RevenueService]
})
export class RevenueModule {}
