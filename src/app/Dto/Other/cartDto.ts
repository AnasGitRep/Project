import { ProductDto } from "../Master/productDto";

export interface CartDto {
    Amount:number|null;
    Tax:number|null;
    userId:string|null;
    products:ProductDto[]|null;
}