import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-component/service/product-service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit{

  productId: any;
  product: any;

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
         this.productId = params['productId'];
    });
    this.product = this.productService.getProductById(this.productId).subscribe(data=>
      this.product = data
     );
    alert(this.product);
  }

}
