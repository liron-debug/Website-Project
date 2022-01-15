import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { A11yModule } from '@angular/cdk/a11y';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AcountComponent } from './acount/acount.component';
import { FooterComponent } from './footer/footer.component';
import { CreatAcountComponent } from './creat-acount/creat-acount.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckOutComponent } from './check-out/check-out.component';
import { CreatAccountDialogComponent } from './creat-account-dialog/creat-account-dialog.component';
import { OrderSuccessComponent } from './order-success/order-success.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AcountComponent,
    FooterComponent,
    CreatAcountComponent,
    CartComponent,
    CheckOutComponent,
    CreatAccountDialogComponent,
    OrderSuccessComponent
  ],
  entryComponents: [CreatAccountDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    A11yModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
