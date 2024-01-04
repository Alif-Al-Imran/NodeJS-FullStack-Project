import { IsString, IsNumber } from "class-validator";

export class UpdateRatingsDto{

    @IsNumber()
    rating: number;

    @IsNumber()
    u_id: number;
    
    @IsString()
    u_name: string;
    
    @IsString()
    review: string;

    @IsNumber()
    t_id: number;
}