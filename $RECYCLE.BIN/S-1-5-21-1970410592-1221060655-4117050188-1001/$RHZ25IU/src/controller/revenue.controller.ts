import { Body, Controller, Get, Param, Post, Put, Delete} from '@nestjs/common';
import { RevenueService } from './../services/revenue.services';
import { CreateRevenueDto } from './../dto/create-revenue.dto';
import { UpdateRevenueDto } from './../dto/update-revenue.dto';

@Controller('revenue')
export class RevenueController {

    constructor(private readonly RevenueService: RevenueService){}

    @Get('getall')
    getAll() {
        return this.RevenueService.findAll();
    }

    @Get(':month')
    revenueMonth(@Param('month') month:string){
        return this.RevenueService.findOne(month);
    }

    @Post('create')
    create (@Body() createRevenueDto: CreateRevenueDto){
        return this.RevenueService.create(createRevenueDto);
    }


    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateRevenueDto: UpdateRevenueDto){
        return this.RevenueService.update(id, updateRevenueDto);
    }

    @Delete('delete/:month')
    delete(@Param('month') month:string){
        return this.RevenueService.delete(month);
    }
}
