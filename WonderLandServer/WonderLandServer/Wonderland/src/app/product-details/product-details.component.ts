import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Item } from '../models/item';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  
  id : string;
  item : Item = {} as Item ;
  subscription : Subscription ;
  cartArray : Item[] = [] ;
  cartSubscription : Subscription;
  

  constructor(private route: ActivatedRoute, private productService : ProductsService, private cart: CartService ) { }


  ngOnInit() {
    this.cartSubscription = this.cart.currentData.subscribe(c => this.cartArray = c);
    this.id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.productService.getProductsById(parseInt(this.id)).subscribe(p => this.item = p) ;
  }

   addToCart(item : Item){
    if (this.isInCart(item) ) {
      alert("This item is already in the cart ..");
      return;
    }
    item.quantity = 1 ;
    this.cartArray.push(item) ;
    
    this.cart.update(this.cartArray) ;
  }

  isInCart(item: Item) {
    let result: boolean = false ;
    this.cartArray.forEach(p => {
      if (p.id == item.id) result = true;
    });
    return result;
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    if (this.cartSubscription) this.cartSubscription.unsubscribe();
  }

}
