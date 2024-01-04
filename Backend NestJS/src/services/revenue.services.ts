import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRevenueDto } from './../dto/create-revenue.dto';
import { UpdateRevenueDto } from './../dto/update-revenue.dto';
import { Revenue } from 'src/entities/revenue.entity';

@Injectable()
export class RevenueService {
  
  constructor(@InjectRepository(Revenue) private readonly revenueRepo: Repository<Revenue>){}

  async findAll()
  {
    return await this.revenueRepo.find();
  }

  async findOne(month: string)
  {
    return await this.revenueRepo.findOne({where: {month:month}});
  }

  async create(CreateRevenueDto: CreateRevenueDto)
  {   
    const Traffic = await this.revenueRepo.create(CreateRevenueDto);
    return await this.revenueRepo.save(Traffic);
  }

  async update(id: number, UpdateRevenueDto: UpdateRevenueDto)
  {
    return await this.revenueRepo.update(id, UpdateRevenueDto);
  }

  async delete(month: string)
  {
    return await this.revenueRepo.delete(month);
  }

  



}
