import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product-component/product-component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product-component/service/product-service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ProductComponent
  ],
  providers:[
    ProductService
  ]
})
export class ProductModule { }
