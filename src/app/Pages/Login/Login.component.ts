import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../Dto/Other/LginDto';
import { AuthService } from '../../services/Auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  standalone:true,
  imports:[FormsModule,HttpClientModule,CommonModule],
  providers:[AuthService],
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
login:LoginDto

  constructor(private service:AuthService,private Rout:Router) { }

  ngOnInit() {
    this.login=new LoginDto
  }


  Login(){
    this.service.Login(this.login).subscribe(res=>{
      if(res.isOk==true){
        console.log(res.item.token)
        localStorage.setItem('jwt_token',JSON.stringify(res.item.token));
        
      }else{
        alert(res.message)
      }
    })
  }
}
