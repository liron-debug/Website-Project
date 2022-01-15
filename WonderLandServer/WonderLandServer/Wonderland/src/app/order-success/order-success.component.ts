import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  cartArray: Item[] = [] ;


  constructor() { }

  ngOnInit() {
  }

  get totalCost() {
    let sum = 0 ;
    for (let item of this.cartArray) {
      sum += item.quantity*item.price;
    }
    return sum; 
  }

}
