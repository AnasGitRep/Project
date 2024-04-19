  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDto } from '../Dto/Master/productDto';
import { development } from '../environment';
import { ResponseModel } from '../Dto/Base/responseModel';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

private apiUrl = development.apiUrl

constructor(private http: HttpClient) { }

addProduct(product: ProductDto): Observable<ResponseModel<ProductDto>> {
  debugger
  return this.http.post<ResponseModel<ProductDto>>(this.apiUrl+'Product/AddProduct', product);
}
GetProducts(): Observable<ResponseModel<ProductDto>> {
  
  return this.http.get<ResponseModel<ProductDto>>(this.apiUrl+'Product/GetProducts');
}
updateProduct(product:ProductDto):Observable<ResponseModel<ProductDto>>{

  return this.http.post<ResponseModel<ProductDto>>(this.apiUrl+'Product/Updateproduct',product);
  }

GetProductByType(id:number):Observable<ResponseModel<ProductDto>>{

  return this.http.get<ResponseModel<ProductDto>>(this.apiUrl+`Product/GetByType/${id}`);
  }
  
GetProductById(id:number):Observable<ResponseModel<ProductDto>>{
  return this.http.get<ResponseModel<ProductDto>>(this.apiUrl+`Product/GetById/${id}`);
  }

  
ProductSData(){
  return null;
}
}




