import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GetOrders, OrderData } from '../types/Orders';

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
    return this.http.get<GetOrders[]>(`${this.url}/${userId}`, {
      observe: 'response',
    });
  }

  deleteOrder(orderId: String) {
    return this.http.delete(`${this.url}/${orderId}`, { observe: 'response' });
  }
}
