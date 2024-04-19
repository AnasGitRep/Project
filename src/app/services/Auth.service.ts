import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterDto } from '../Dto/Other/Register.Dto';
import { development } from '../environment';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Dto/Base/responseModel';
import { LoginDto } from '../Dto/Other/LginDto';
import { IdTextDto } from '../Dto/Base/idTextDto';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

JwtHelper = new JwtHelperService();

private apiUrl = development.apiUrl
constructor(private http: HttpClient) {}

public Register(model: RegisterDto): Observable<ResponseModel<RegisterDto>> {
  return this.http.post<ResponseModel<RegisterDto>>(this.apiUrl + 'Account/CreateAccount', model);
}

public Login(model: LoginDto): Observable<ResponseModel<LoginDto>> {
  return this.http.post<ResponseModel<LoginDto>>(this.apiUrl + 'Account/Login', model);
}
public ResendOtp(model: IdTextDto): Observable<ResponseModel<IdTextDto>> {
  return this.http.post<ResponseModel<IdTextDto>>(this.apiUrl + 'Account/SendOtpAgain', model);
}
  
public Cmpleteregister(model: IdTextDto): Observable<ResponseModel<IdTextDto>> {
  return this.http.post<ResponseModel<IdTextDto>>(this.apiUrl + 'Account/CompleteRegistration', model);
}


getToken(): string | null {
  return localStorage.getItem('jwt_token');
}

getDecodedToken(): any {
  const token = this.getToken();
  if (token) {
    return this.JwtHelper.decodeToken(token);
  }
  return null;
}

getUserId(): any {
  const token = this.getDecodedToken();
  if (token) {
    return token.UserId;
  }
  return null;
}

getUserName(): any {
  const token = this.getDecodedToken();
  if (token) {
    return token.UserName;
  }
  return null;
}

}
