import { Component, OnInit } from '@angular/core';

import { OrderService } from '../order.service';
import { GetOrders, OrderData } from 'src/app/types/Orders';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  ordersData: GetOrders[] | undefined;

  constructor(
    private orderService: OrderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let userId = this.userService.getUserId();
    this.orderService.getOrdersForUser(userId).subscribe({
      next: (result) => {
        if (result.body) {
          this.ordersData = result.body;
        }
      },
      error: (error) => {
        console.log(error.error.message);
      },
    });
  }

  cancelOrder(orderId: string) {
    this.orderService.deleteOrder(orderId).subscribe({
      next: (result) => {
        if (result.ok === true) {
          this.ngOnInit();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
