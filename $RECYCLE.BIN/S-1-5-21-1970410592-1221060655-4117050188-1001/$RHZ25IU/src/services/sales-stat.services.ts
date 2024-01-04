import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalesStatDto } from './../dto/create-sales-stat.dto';
import { UpdateSalesStatDto } from './../dto/update-sales-stat.dto';
import { SalesStat } from 'src/entities/sales-stat.entity';

@Injectable()
export class SalesStatService {
  
  constructor(@InjectRepository(SalesStat) private readonly salesstatRepo: Repository<SalesStat>){}

  async findAll()
  {
    return await this.salesstatRepo.find();
  }

  async findOne(t_id: number)
  {
    return await this.salesstatRepo.findOne({where: {t_id:t_id}});
  }

  async create(CreateSalesStatDto: CreateSalesStatDto)
  {   
    const SalesStat = await this.salesstatRepo.create(CreateSalesStatDto);
    return await this.salesstatRepo.save(SalesStat);
  }

  async update(t_id: number, UpdateSalesStatDto: UpdateSalesStatDto)
  {
    return await this.salesstatRepo.update(t_id, UpdateSalesStatDto);
  }

  async delete(t_id: number)
  {
    return await this.salesstatRepo.delete(t_id);
  }

  



}
