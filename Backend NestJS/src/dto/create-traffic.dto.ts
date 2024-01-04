import { IsString, IsNumber } from "class-validator";

export class CreateTrafficDto{

    @IsString()
    month: string;

    @IsNumber()
    page_views: number;
    
    @IsString()
    time_on_page: number;

    @IsNumber()
    sessions: number;
}