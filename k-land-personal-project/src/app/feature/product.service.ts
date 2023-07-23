import { Injectable } from '@angular/core';

import { AddProductData } from '../types/Product';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'http://localhost:3030/data/catalog';

  constructor(private http: HttpClient) {}

  addProduct(productData: AddProductData) {
    return this.http.post(this.url, productData, {
      observe: 'response',
    });
  }

  getProducts() {
    return this.http.get<AddProductData[]>(this.url);
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${this.url}/${productId}`);
  }

  getSingleProduct(productId: string) {
    return this.http.get<AddProductData>(`${this.url}/${productId}`, {
      observe: 'response',
    });
  }

  updateProduct(productData: AddProductData, productId: string | undefined) {
    return this.http.put(`${this.url}/${productId}`, productData, {
      observe: 'response',
    });
  }

  getLastProducts() {
    return this.http.get<AddProductData[]>(`${this.url}?limit=3`);
  }

}
