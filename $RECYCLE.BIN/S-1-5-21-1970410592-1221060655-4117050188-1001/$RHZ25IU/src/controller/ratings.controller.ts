import { Body, Controller, Get, Param, Post, Put, Delete} from '@nestjs/common';
import { RatingsService } from './../services/ratings.services';
import { CreateRatingsDto } from './../dto/create-ratings.dto';
import { UpdateRatingsDto } from './../dto/update-ratings.dto';

@Controller('ratings')
export class RatingsController {

    constructor(private readonly RatingsService: RatingsService){}

    @Get('getall')
    getAll() {
        return this.RatingsService.findAll();
    }

    @Get(':id')
    ratingId(@Param('id') id:number){
        return this.RatingsService.findOne(id);
    }

    @Post('create')
    create (@Body() createRatingsDto: CreateRatingsDto){
        return this.RatingsService.create(createRatingsDto);
    }


    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateRatingsDto: UpdateRatingsDto){
        return this.RatingsService.update(id, updateRatingsDto);
    }

    @Delete('delete/:id')
    delete(@Param('id') id:number){
        return this.RatingsService.delete(id);
    }
}
