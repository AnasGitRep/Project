import { BaseEntityDto } from "../Base/baseEntityDto";

export interface CategoryDto extends BaseEntityDto {
    
    name: string | null;
    description: string | null;
}