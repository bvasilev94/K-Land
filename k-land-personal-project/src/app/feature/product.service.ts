import { Injectable } from '@angular/core';

import { AddProductData } from '../types/Product';
import { HttpClient } from '@angular/common/http';
import { GetUser } from '../types/User';

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

  getProducts() {
    return this.http.get<AddProductData[]>('http://localhost:3030/data/catalog');
  }
}
