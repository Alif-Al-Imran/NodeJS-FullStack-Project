import { Module } from '@nestjs/common';
import { RatingsController } from './../controller/ratings.controller';
import { RatingsService } from './../services/ratings.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ratings } from 'src/entities/ratings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ratings])],
  controllers: [RatingsController],
  providers: [RatingsService]
})
export class RatingsModule {}
