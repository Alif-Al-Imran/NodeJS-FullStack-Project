import { Module } from '@nestjs/common';
import { SalesStatController } from './../controller/sales-stat.controller';
import { SalesStatService } from './../services/sales-stat.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesStat } from 'src/entities/sales-stat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesStat])],
  controllers: [SalesStatController],
  providers: [SalesStatService]
})
export class SalesStatModule {}
