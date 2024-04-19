import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Layouts/Header/Header.component';
import { FooterComponent } from '../../Layouts/Footer/Footer.component';
import { Route, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/Product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  standalone:true,
  imports:[CommonModule,HttpClientModule],
  providers:[ProductService],
  selector: 'app-Landing',
  templateUrl: './Landing.component.html',
  styleUrls: ['./Landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private service:ProductService,private Route:Router,) { }

  ngOnInit() {
  }

  GetItems(typeId:number){
    this.Route.navigate([`ListProduct/${typeId}`])
  }
}
