import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { AuthService } from './Auth.service';
import { ProductDto } from '../Dto/Master/productDto';
import { CartDto } from '../Dto/Other/cartDto';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../Stats/AppState/AppState';
import { decrement, increment, reset } from '../Stats/CartState/CartCountActions';


@Injectable({
  providedIn: 'root'
})
export class CartService {

productCountSubject = new BehaviorSubject<number>(0); // BehaviorSubject to store and emit the count of products
productCount$: Observable<number> = this.productCountSubject.asObservable();

public products = new Subject();
private cartKey = 'user_cart';


constructor(private store:Store<AppState>){ 

}
 addToCart(product: ProductDto){
   let cart = this.getCartFromLocalStorage();
   if (!cart) {
     cart = {
       Amount: 0,
       Tax: 0,
       userId: "sws",
       products: []
     };
   }
   cart.products.push(product);
   this.saveCartToLocalStorage(cart);
   
  this.incriment()
 }

 
 getProducts(): Observable<any> {
  console.log('this.cartItems :');
  return this.products.asObservable();
}

saveCartToLocalStorage(cart: CartDto): void {
  localStorage.setItem(this.cartKey, JSON.stringify(cart));
}

getCart(): CartDto | null {
  return this.getCartFromLocalStorage();
}

clearCart(): void {
  localStorage.removeItem(this.cartKey);
}

getCartFromLocalStorage(): CartDto | null {
  const cartData = localStorage.getItem(this.cartKey);
  return cartData ? JSON.parse(cartData) : null;
}

//CartCountState.......................................

  incriment(){
    this.store.dispatch(increment())
  }
  dicriment(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }
  //.................................................
}
