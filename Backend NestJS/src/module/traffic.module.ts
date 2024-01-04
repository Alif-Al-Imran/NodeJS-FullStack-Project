import { Module } from '@nestjs/common';
import { TrafficController } from './../controller/traffic.controller';
import { TrafficService } from './../services/traffic.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Traffic } from 'src/entities/traffic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Traffic])],
  controllers: [TrafficController],
  providers: [TrafficService]
})
export class TrafficModule {}
