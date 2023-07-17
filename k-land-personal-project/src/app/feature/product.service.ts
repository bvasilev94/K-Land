import { Injectable } from '@angular/core';

import { AddProductData } from '../types/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(productData: AddProductData) {
    return this.http.post('http://localhost:3030/data/catalog', productData, {
      observe: 'response',
    });
  }
}
