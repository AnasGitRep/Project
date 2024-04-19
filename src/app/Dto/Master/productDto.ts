import { BaseEntityDto } from "../Base/baseEntityDto";

export class ProductDto implements BaseEntityDto {
    id: number;
    createDate: string;
    name: string | null;
    description: string | null;
    discountPrice: number | null;
    price: number | null;
    stockQuantity: number | null;
    productRating: number | null;
    comments: string[] | null;
    commentsAddedAt: string | null;
    views: number | null;
    isInStock: boolean | null;
    updatedAt: string | null;
    isActive: boolean | null;
    isFeatured: boolean | null;
    categoryId: number | null;
    brandId: number | null;
    typesId:number|null;
    categoryName: string | null;
    brandName:string|null;
    images: ImageDto[] | null;
}

export interface ImageDto {
    id: number | null;
    url: string | null;
    isMain: boolean | null;
}