import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/Product.service';
import { ImageDto, ProductDto } from '../../../Dto/Master/productDto';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@Component({
  standalone:true,
  imports:[CommonModule,HttpClientModule],
  providers:[ProductService],
  selector: 'app-ListProducts',
  templateUrl: './ListProducts.component.html',
  styleUrls: ['./ListProducts.component.css']
})
export class ListAdminProductsComponent implements OnInit {

  products:ProductDto[]
  constructor(private ProductService:ProductService) { }

  ngOnInit() {
    this.Getproducts()
  }
  Getproducts(){
    this.ProductService.GetProducts().subscribe(res=>{
      this.products=res.items;
      console.log(res.items)
    })
  }

  setMainImage(product: ProductDto, image: ImageDto) {
    product.images.forEach(img => {
      img.isMain = (img.id === image.id); // Set isMain to true for the clicked image, and false for others
    });
    console.log(product)
    // Call your service method to update the product with the new main image
    this.ProductService.updateProduct(product).subscribe(res => {
      
    });
  }


  DeleteImage(id:number){

  }
}
