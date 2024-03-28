import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../product-module/product-component/service/product-service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit{

  products !: any;
  categories !: any;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    console.log(this.products);
    console.log(this.categories);
  }

  getProducts(){
    this.productService.getProducts().subscribe(data =>{  
      this.products = data;
      })  
  }

  getCategories(){
    this.productService.getCategories().subscribe(data =>{  
      this.categories = data;  
      })  
  }

}
