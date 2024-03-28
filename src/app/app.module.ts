import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { CommonModule } from '@angular/common';
import { ProductModule } from './product-module/product-module';
import { UserLoginComponent } from './user-module/user-login/user-login.component';
import { UserRegisterComponent } from './user-module/user-register/user-register.component';
import { ForgotPasswordComponent } from './user-module/forgot-password/forgot-password.component';
import { ViewProductComponent } from './product-module/view-product/view-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ForgotPasswordComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
