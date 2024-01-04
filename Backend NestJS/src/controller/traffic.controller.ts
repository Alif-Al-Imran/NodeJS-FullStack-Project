import { Body, Controller, Get, Param, Post, Put, Delete} from '@nestjs/common';
import { TrafficService } from './../services/traffic.services';
import { CreateTrafficDto } from './../dto/create-traffic.dto';
import { UpdateTrafficDto } from './../dto/update-traffic.dto';

@Controller('traffic')
export class TrafficController {

    constructor(private readonly TrafficService: TrafficService){}

    @Get('getall')
    getAll() {
        return this.TrafficService.findAll();
    }

    @Get(':month')
    trafficMonth(@Param('month') month:string){
        return this.TrafficService.findOne(month);
    }

    @Post('create')
    create (@Body() createTrafficDto: CreateTrafficDto){
        return this.TrafficService.create(createTrafficDto);
    }


    @Put('update/:month')
    update(@Param('month') month: string, @Body() updateTrafficDto: UpdateTrafficDto){
        return this.TrafficService.update(month, updateTrafficDto);
    }

    @Delete('delete/:month')
    delete(@Param('month') month:string){
        return this.TrafficService.delete(month);
    }
}
