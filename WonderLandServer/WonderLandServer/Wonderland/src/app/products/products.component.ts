import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Item } from '../models/item';
import { CartService } from '../services/cart.service';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
 
  cat : string ;
  search : string ;
  products : Item[];
  filteredProducts : Item[] ;
  productsFilteredBySearch : Item[]  ;
  productsFilteredByCategory : Item[] ;
  productsInPage : Item[] ;
  cartArray : Item[] = [] ;
  subscription : Subscription;
  cartSubscription : Subscription;
  
  length : number = 100 ;
  pageSize = 3;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex : number = 0 ;

  constructor(private route: ActivatedRoute , private productService : ProductsService, private cart: CartService) { }

  ngOnInit() {
    this.cartSubscription = this.cart.currentData.subscribe(c => this.cartArray = c);
    this.cat = this.route.snapshot.paramMap.get('category');
    
    this.subscription = this.productService.getProducts().pipe(switchMap(products => {
      this.products = products; console.log(products);
      return this.route.queryParamMap ;
  })).subscribe(params => {
    this.search = params.get('query');
    this.filterProducts() ;
  }) ;
  }

  filterProducts() {
    if (this.cat) this.productsFilteredByCategory = this.products.filter(p => p.category == this.cat);
    if (this.search) this.productsFilteredBySearch = this.products.filter(p => 
      (p.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()) || 
      p.description.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())) ) ;
    // if (this.search) this.productsFiltered = this.productService.getProductBySearch(this.search) ;

    this.filteredProducts = (this.search) ? this.productsFilteredBySearch : this.productsFilteredByCategory ;
    this.length = this.filteredProducts.length ;
    this.productsInPage = this.filteredProducts.slice(0,this.pageSize);
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

  pageChange(pageEvent : PageEvent) {
    this.pageSize = pageEvent.pageSize ;
    this.pageIndex = pageEvent.pageIndex ;
    this.productsInPage = this.filteredProducts.slice(this.pageSize*this.pageIndex, this.pageSize*(this.pageIndex+1));
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe() ;
    if (this.cartSubscription) this.cartSubscription.unsubscribe() ;
  }

}
