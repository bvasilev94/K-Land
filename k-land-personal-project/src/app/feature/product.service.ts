import { Injectable } from '@angular/core';

import { AddProductData } from '../types/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(productData: AddProductData) {
    console.log(productData);
    return this.http.post('http://localhost:3030/data/catalog', productData);
  }
}
