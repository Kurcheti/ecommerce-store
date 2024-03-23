import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http:HttpClient) { }

  private productBaseUrl = 'http://localhost:9494/products/';  
  private categoryBaseUrl = 'http://localhost:9494/categories/';

  getProducts(): Observable<any> {  
    return this.http.get(`${this.productBaseUrl}`+'getAllProducts');  
  } 

  getCategories(): Observable<any> {  
    return this.http.get(`${this.categoryBaseUrl}`+'getAllCategory');  
  } 
}
