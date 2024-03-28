import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!: any;
  categories!: any;

  
  // private productsResp = new BehaviorSubject(this.products);
  // getProductResp = this.productsResp.asObservable();

  // private categoryResp = new BehaviorSubject(this.categories);
  // getCategoryResp = this.categoryResp.asObservable();

  constructor(private http:HttpClient) { }

  private productBaseUrl = 'http://localhost:9494/products/';  
  private categoryBaseUrl = 'http://localhost:9494/categories/';

  getProducts(): Observable<any> {  
    return this.http.get(`${this.productBaseUrl}`+'getAllProducts');  
    //this.productsResp.next(this.products);
    //return this.products;
  } 

  getCategories(): Observable<any> {  
    return this.http.get(`${this.categoryBaseUrl}`+'getAllCategory');  
    //this.categoryResp.next(this.categories);
    //return this.categories;
  } 

  getProductById(productId:any): Observable<any> {  
    return this.http.get(`${this.productBaseUrl}`+'getProductById/'+productId);  
    //this.categoryResp.next(this.categories);
    //return this.categories;
  }
}
