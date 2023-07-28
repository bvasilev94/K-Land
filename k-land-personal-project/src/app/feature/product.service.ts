import { EventEmitter, Injectable } from '@angular/core';

import { AddProductData } from '../types/Product';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'http://localhost:3030/data/catalog';

  cartEmmiter = new EventEmitter<AddProductData[]>();

  removeFromCartEmmiter = new EventEmitter<AddProductData[]>();

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

  addToCart(data: AddProductData) {
    let cartId = Date();
    data.cartId = cartId;
    let localCart = [];
    let productsData = localStorage.getItem('cart');
    if (!productsData) {
      localCart.push(data);
      localStorage.setItem('cart', JSON.stringify(localCart));
    } else {
      localCart = JSON.parse(productsData);
      localCart.push(data);
      localStorage.setItem('cart', JSON.stringify(localCart));
    }

    this.cartEmmiter.emit(localCart);
  }

  removeProduct(product: AddProductData, cartItems: AddProductData[]) {
    let localCart = localStorage.getItem('cart');
    let cart = [];
    if (localCart) {
      cart = JSON.parse(localCart);
      cart = cart.filter((item: AddProductData) => {
        return item.cartId !== product.cartId;
      });
    }

    cartItems = cart;

    localStorage.setItem('cart', JSON.stringify(cartItems));
    if (cartItems.length < 1) {
      localStorage.removeItem('cart');
    }
    this.removeFromCartEmmiter.emit(cartItems);

    return cartItems;
  }
}
