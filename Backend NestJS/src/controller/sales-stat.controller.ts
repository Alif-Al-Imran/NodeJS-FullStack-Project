import { Body, Controller, Get, Param, Post, Put, Delete} from '@nestjs/common';
import { SalesStatService } from './../services/sales-stat.services';
import { CreateSalesStatDto } from './../dto/create-sales-stat.dto';
import { UpdateSalesStatDto } from './../dto/update-sales-stat.dto';

@Controller('salesstat')
export class SalesStatController {

    constructor(private readonly SalesStatService: SalesStatService){}

    @Get('getall')
    getAll() {
        return this.SalesStatService.findAll();
    }

    @Get(':t_id')
    ratingId(@Param('t_id') t_id:number){
        return this.SalesStatService.findOne(t_id);
    }

    @Post('create')
    create (@Body() createSalesStatDto: CreateSalesStatDto){
        return this.SalesStatService.create(createSalesStatDto);
    }


    @Put('update/:t_id')
    update(@Param('t_id') t_id: number, @Body() updateSalesStatDto: UpdateSalesStatDto){
        return this.SalesStatService.update(t_id, updateSalesStatDto);
    }

    @Delete('delete/:t_id')
    delete(@Param('t_id') t_id:number){
        return this.SalesStatService.delete(t_id);
    }
}
