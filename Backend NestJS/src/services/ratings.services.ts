import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRatingsDto } from './../dto/create-ratings.dto';
import { UpdateRatingsDto } from './../dto/update-ratings.dto';
import { Ratings } from 'src/entities/ratings.entity';

@Injectable()
export class RatingsService {
  
  constructor(@InjectRepository(Ratings) private readonly ratingsRepo: Repository<Ratings>){}

  async findAll()
  {
    return await this.ratingsRepo.find();
  }

  async findOne(id: number)
  {
    return await this.ratingsRepo.findOne({where: {r_id:id}});
  }

  async create(CreateRatingsDto: CreateRatingsDto)
  {   
    const Ratings = await this.ratingsRepo.create(CreateRatingsDto);
    return await this.ratingsRepo.save(Ratings);
  }

  async update(id: number, UpdateRatingsDto: UpdateRatingsDto)
  {
    return await this.ratingsRepo.update(id, UpdateRatingsDto);
  }

  async delete(id: number)
  {
    return await this.ratingsRepo.delete(id);
  }

  



}
