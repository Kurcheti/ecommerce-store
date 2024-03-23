import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './service/home-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit{

  products : any;
  categories: any;
  productImagesPath: any = 'D://ecommerce/img/product_img';
  categoryImagesPath: any = 'D://ecommerce/img/category_img';

  constructor(private homeService: HomeServiceService){}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    console.log(this.products);
    console.log(this.categories);
  }

  getProducts(){
    this.homeService.getProducts().subscribe(data =>{  
      this.products = data;  
      })  
  }

  getCategories(){
    this.homeService.getCategories().subscribe(data =>{  
      this.categories = data;  
      })  
  }

}
