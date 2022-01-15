import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';
import { LoggedUser } from '../models/loggedUser';
import { CrudService } from '../services/crud.service';
import { UserModel } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartArray : Item[] = [] ;
  loggedUser : UserModel ;

  model = {
    searchText : ""
  }

  constructor(private cart : CartService, private crud: CrudService, private router: Router) { }

  ngOnInit() {
    this.cart.currentData.subscribe(d=> this.cartArray = d) ; 
    this.crud.getUser().subscribe(u => this.loggedUser = u) ;
  }

  logout() {
    this.crud.LogOut();
  }

  onSubmit() {
    // searching function
    console.log(this.model);
    this.router.navigate(['/products'], {queryParams: { 'query': this.model.searchText }, queryParamsHandling: 'merge' } );
    
  }


}
