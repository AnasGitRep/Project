import { Injectable } from '@angular/core';
import { development } from '../environment';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Dto/Base/responseModel';
import { ProductDto } from '../Dto/Master/productDto';
import { HttpClient } from '@angular/common/http';
import { CategoryDto } from '../Dto/Other/categoryDto';
import { TypesDto } from '../Dto/Other/typesDto';
import { BrandDto } from '../Dto/Other/BrandDto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) { }
private apiUrl = development.apiUrl


GetCategories(): Observable<ResponseModel<CategoryDto>> {
  
  return this.http.get<ResponseModel<CategoryDto>>(this.apiUrl+'Data/GetCateGory');
}
GetTypes(): Observable<ResponseModel<TypesDto>> {

  return this.http.get<ResponseModel<TypesDto>>(this.apiUrl+'Data/GetTypes');
}

GetBrands(): Observable<ResponseModel<BrandDto>> {

  return this.http.get<ResponseModel<BrandDto>>(this.apiUrl+'Data/GetBrands');
}
}
