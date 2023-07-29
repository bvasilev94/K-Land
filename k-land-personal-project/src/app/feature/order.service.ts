import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { OrderData } from '../types/Orders';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url: string = 'http://localhost:3030/orders/all-orders';

  constructor(private http: HttpClient) {}

  createOrder(orderData: OrderData) {
    return this.http.post(this.url, orderData, {
      observe: 'response',
    });
  }

  getOrdersForUser(userId: string) {
    this.http.get(`${this.url}/${userId}`, {
      observe: 'response',
    });
  }
}
