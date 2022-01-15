import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AcountComponent } from './acount/acount.component';
import { CreatAcountComponent } from './creat-acount/creat-acount.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'acount', component: AcountComponent},
  { path: 'creat-acount', component: CreatAcountComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'products/:category', component: ProductsComponent},
  { path: 'productsDetails/:id', component: ProductDetailsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'check-out', component: CheckOutComponent, canActivate : [AuthGuardService]},
  { path: 'order-success', component: OrderSuccessComponent, canActivate : [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
