import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { CartService } from '../services/cart.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartArray : Item[] = [] ;
  subscription: Subscription ;

  constructor(private cart : CartService) { }

  ngOnInit() {
    this.subscription =  this.cart.currentData.subscribe(d => this.cartArray = d);
  }

  addToCart(item : Item) {
    item.quantity++ ;
    this.cart.update(this.cartArray) ;
  }

  removeFromCart(item: Item) {
    if (item.quantity==1) {
      let index = this.cartArray.indexOf(item);
      this.cartArray.splice(index,1);
    }
    if (item.quantity==1) return;
    item.quantity-- ;
    this.cart.update(this.cartArray) ;
  }

  get totalCost() {
    let sum = 0 ;
    for (let item of this.cartArray) {
      sum += item.quantity*item.price;
    }
    return sum;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe() ;
  }

}
