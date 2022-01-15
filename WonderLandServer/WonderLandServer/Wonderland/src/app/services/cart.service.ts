import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartData = new BehaviorSubject([]) ;
  currentData = this.cartData.asObservable() ;

  constructor() { }

  update(newValue : Item[]) {
    this.cartData.next(newValue) ;
  }
}
