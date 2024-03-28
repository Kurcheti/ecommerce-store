import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './service/product-service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.scss']
})
export class ProductComponent implements OnInit{
  
  products : any;
  categories : any;
  tempProducts: any;
  searchText : any;

  constructor(private productService:ProductService){}

  ngOnInit(): void {
      this.productService.getProducts().subscribe(data=>{
         this.products = data;
         this.tempProducts = data;
       } );
      this.productService.getCategories().subscribe(data=>
         this.categories = data
        )
  }

  getProductsByCategory(category:any){
    if(category === 'all'){
      this.products = this.tempProducts;
    }else{
      this.products = this.tempProducts.filter((product:any) =>product.category.categoryName.includes(category));
    }
  }

  searchKey(data: string) {
    this.searchText = data;
    this.search();
  }

  search() {
    this.products = this.searchText === ""? this.tempProducts : this.tempProducts.filter((element:any) => {
      return element.productName.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

}
