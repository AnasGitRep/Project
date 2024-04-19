import { Component, DoCheck, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AddProductComponent } from '../../Masters/Admin/AddProduct/AddProduct.component';
import { CartService } from '../../services/Cart.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../Stats/AppState/AppState';
import { selectCount } from '../../Stats/CartState/CartCountSelectrore';

@Component({
  selector: 'app-Header',
  standalone:true,
  imports:[RouterLink,HttpClientModule,CommonModule,AsyncPipe],  
  providers:[CartService,],
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit{
  productCount = 0; // Variable to store the count of products in the cart
  productCountSubscription: Subscription;
   cartProductCount: number = 0;
  products: any = [];

  count:Observable<number>;
  constructor(private cartService: CartService,private cdr: ChangeDetectorRef,private store:Store<AppState>) { 
    this.count=this.store.select(selectCount)
  }

  ngOnInit():void{
    this.cartService.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    });
    
  }
  hello(){

    
  }

}
