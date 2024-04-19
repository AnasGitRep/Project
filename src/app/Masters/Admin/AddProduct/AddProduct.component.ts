import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductDto } from '../../../Dto/Master/productDto';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/Product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/Data.service';
import { CategoryDto } from '../../../Dto/Other/categoryDto';
import { TypesDto } from '../../../Dto/Other/typesDto';
import { BrandDto } from '../../../Dto/Other/BrandDto';

@Component({
  standalone:true,
  imports:[FormsModule,HttpClientModule,CommonModule],
  providers:[ProductService,DataService],
  selector: 'app-AddProduct',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.css']
})
export class AddProductComponent implements OnInit {
  product:ProductDto;
  Categories:CategoryDto[]
  Brands:BrandDto[]
  mainImageIndex: number; 
  Types:TypesDto[]
  isDropdownOpen: boolean = false;
  @ViewChild('categorySelect') categorySelect: ElementRef;
  constructor(private productService: ProductService ,private dataService:DataService) { }

  ngOnInit() {  
    this.product=new ProductDto
    this.product.images = [];
    this.dataService.GetCategories().subscribe(res=>{
      this.Categories=res.items;
      
    })
    this.dataService.GetTypes().subscribe(res=>{
      this.Types=res.items;
    })
    this.dataService.GetBrands().subscribe(res=>{
      this.Brands=res.items;
    })

  }
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.categorySelect.nativeElement.focus();
    }
  }

  onSubmit(): void {
    if (this.mainImageIndex >= 0 && this.mainImageIndex < this.product.images.length) {
      // Set the main image based on the selected index
      this.product.images.forEach((image, index) => {
        image.isMain = index === this.mainImageIndex;
      });
    }

    this.productService.addProduct(this.product)
    .subscribe(() => {
      console.log('Product added successfully');
      // Optionally, navigate to a different page or perform other actions after successful addition
    }, error => {
      console.error('Error adding product:', error);
    });
  }
imgUrl:string;
  onFileChange(event): void {
    const files = event.target.files;
    if (files && files.length) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageDataUrl = reader.result as string;
          this.imgUrl=imageDataUrl
          this.product.images.push({ url: imageDataUrl, isMain: false,id:null });
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }
  
  SetMain:ProductDto
  
  setprimary(url:string){
    this.product.images.find(x=>{
      return x.url==url;
    })
  }

}
