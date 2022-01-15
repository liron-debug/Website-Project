import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckoutService } from '../services/checkout.service';
import { Router } from '@angular/router';
import { OrderItem } from '../models/orderItem';
import { countryList } from '../models/countries-list';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  cartArray: Item[] = [] ;
  subscription : Subscription ;
  postOrderSubscription: Subscription;
  checkoutForm : FormGroup ;
  states : string[] = countryList ;

  constructor(private fb: FormBuilder, private cart : CartService, private checkout: CheckoutService, private router: Router ) { }

  ngOnInit() {
    this.subscription =  this.cart.currentData.subscribe(d => this.cartArray = d);

    this.checkoutForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      name: ['', [Validators.required ] ],
      address: ['' , [Validators.required]],
      address2: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: [null, [Validators.required] ],
      gridCheck: [false]
    });
  }

  get totalCost() {
    let sum = 0 ;
    for (let item of this.cartArray) {
      sum += item.quantity*item.price;
    }
    return sum; 
  }
 
  onSubmit() {
    const orderItems = this.cartArray.map(p => new OrderItem(p.id, p.quantity));
    var order = {
      OrderItems : orderItems ,
      ...this.checkoutForm.value
    }
    this.postOrderSubscription = this.checkout.sendOrderToDatabase(order)
    .subscribe(o => {
      console.log(o);
      if (o) {
        this.router.navigate(['/order-success']);
      }
    },
    (err) => { alert("something wen wrong : " + err); },
    () => { this.cart.update([]);  }
     ) ;

    
  }

  selectState(event) {
    this.checkoutForm.get('state').setValue(event.target.value, { onlySelf: true } ) ;
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe() ;
    if (this.postOrderSubscription) this.postOrderSubscription.unsubscribe() ;
  }


}
