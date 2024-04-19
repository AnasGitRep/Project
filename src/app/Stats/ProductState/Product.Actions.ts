import { createAction, props } from "@ngrx/store";
import { ProductDto } from "../../Dto/Master/productDto";

export const loadProduct=createAction('[Product Component] loadProduct')
export const loadProductSuccess=createAction('[Product Component] loadProductSuccess',
    props<{product:ProductDto[]}>()
)
export const loadProductFailed=createAction('[Product Component] loadProductFailed',
    props<{errorMessage:string}>()
)