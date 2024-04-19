import { Component, OnInit } from '@angular/core';
import { ImageDto, ProductDto } from '../../../Dto/Master/productDto';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../../services/Product.service';
import { CartDto } from '../../../Dto/Other/cartDto';
import { AuthService } from '../../../services/Auth.service';
import { CartService } from '../../../services/Cart.service';



@Component({
  standalone:true,
  imports:[CommonModule,HttpClientModule],
  providers:[ProductService,AuthService,CartService],
  selector: 'app-ProductDetail',
  templateUrl: './ProductDetail.component.html',
  styleUrls: ['./ProductDetail.component.css']
})
export class ProductDetailComponent implements OnInit {
  PramId:number
  products:ProductDto
  MainImage:ImageDto
  ImageHover:boolean=false

  constructor(
    private ActiveRoute:ActivatedRoute,
    private service:ProductService,
    private CartService:CartService
    ) { }

  ngOnInit() {
    this.ActiveRoute.params.subscribe(params => {
      this.PramId = params['id'];
    })

    this.service.GetProductById(this.PramId).subscribe(res=>{
      this.products=res.item
      const mainImage = this.products.images.find(image => image.isMain);
      this.MainImage = mainImage
    })
  }

  changeImg(img:ImageDto){
    this.MainImage=img
  }

  addToCart(product: ProductDto): void {
    this.CartService.addToCart(product)
  }


  Hover(){
    this.ImageHover=true
  }
  HoverEnd(){
    this.ImageHover=false
  }

}
