import { BaseEntityDto } from "../Base/baseEntityDto";

export interface BrandDto extends BaseEntityDto {
    
    name: string | null;
    description: string | null;
}