import { Component, OnInit } from '@angular/core';
import { RegisterDto } from '../../Dto/Other/Register.Dto';
import { AuthService } from '../../services/Auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@Component({
  standalone:true,
  imports:[FormsModule,HttpClientModule,CommonModule],
  providers:[AuthService],
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  newaccount:boolean=false
  register:RegisterDto
  resendInput:boolean=false
  SgowOtInput:boolean=false
    constructor(private service:AuthService,private Rout:Router) { }
  
    ngOnInit() {
      this.register=new RegisterDto

    }

    CreateAccount(){
      console.log("jjsn")
      if(this.register.UserName=="Admin"){
        this.register.IsAdmin=true;
      }else{
        this.register.IsAdmin=false;
      }
      this.service.Register(this.register).subscribe(res=>{
        if(res.isOk==true){
          alert(res.message)
          this.SgowOtInput=true
        }if(res.isOk==false){
          alert(res.message)
        }
      })
    }

}
