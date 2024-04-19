import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/Product.service';
import { ProductDto } from '../../../Dto/Master/productDto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SetBackGround } from '../../../Directives/SetBackGround';
import { CustomStructuIF } from '../../../Directives/CustomStructuIF';
import { DiscountPipe } from '../../../Pipe/DiscountPipe';
import { CartService } from '../../../services/Cart.service';


@Component({
  

  selector: 'app-ListProducts',
  standalone:true,
  imports:[CommonModule,HttpClientModule,SetBackGround,CustomStructuIF,DiscountPipe],
  providers:[ProductService],
  templateUrl: './ListProducts.component.html',
  styleUrls: ['./ListProducts.component.css']
})
export class ListProductsComponent implements OnInit {
  ShowDetails:boolean
  PramId:number
  ShowTableView:boolean
  ItemImg:String
  products:ProductDto[]
  constructor(private router:Router,private route:ActivatedRoute,private service:ProductService,private CartService :CartService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.PramId = params['id'];
    })
    this.service.GetProductByType(this.PramId).subscribe(res=>{
      
      this.products=res.items
    })
  }

  showtable(){
    this.ShowTableView=!this.ShowTableView
  }

  GetProductDetails(ProductId:number){
    this.router.navigate([`ProductDetail/${ProductId}`])
  }
  
  showDetail(url:string){
    this.ShowDetails = !this.ShowDetails;
    this.ItemImg=url
  }
  toggleContent() {

  }
  AddTocart(product:ProductDto){
    console.log("sndwj")
    this.CartService.addToCart(product)
  }
}
