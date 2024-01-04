import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrafficDto } from './../dto/create-traffic.dto';
import { UpdateTrafficDto } from './../dto/update-traffic.dto';
import { Traffic } from 'src/entities/traffic.entity';

@Injectable()
export class TrafficService {
  
  constructor(@InjectRepository(Traffic) private readonly trafficRepo: Repository<Traffic>){}

  async findAll()
  {
    return await this.trafficRepo.find();
  }

  async findOne(month: string)
  {
    return await this.trafficRepo.findOne({where: {month:month}});
  }

  async create(CreateTrafficDto: CreateTrafficDto)
  {   
    const Traffic = await this.trafficRepo.create(CreateTrafficDto);
    return await this.trafficRepo.save(Traffic);
  }

  async update(month: string, UpdateTrafficDto: UpdateTrafficDto)
  {
    return await this.trafficRepo.update(month, UpdateTrafficDto);
  }

  async delete(month: string)
  {
    return await this.trafficRepo.delete(month);
  }

  



}
