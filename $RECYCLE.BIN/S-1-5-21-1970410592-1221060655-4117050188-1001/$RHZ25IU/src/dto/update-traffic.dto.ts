import { IsString, IsNumber } from "class-validator";

export class UpdateTrafficDto{

    @IsString()
    month: string;

    @IsNumber()
    page_views: number;
    
    @IsString()
    time_on_page: number;

    @IsNumber()
    sessions: number;
}