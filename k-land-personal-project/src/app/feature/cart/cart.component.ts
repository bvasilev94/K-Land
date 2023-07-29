import { Component, EventEmitter, OnInit } from '@angular/core';

import { AddProductData } from 'src/app/types/Product';
import { ProductService } from '../product.service';
import { UserService } from 'src/app/auth/user.service';
import { OrderData } from 'src/app/types/Orders';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: AddProductData[] | undefined;
  cartEmmiter = new EventEmitter<AddProductData[]>();
  totalPrice: number = 4.99;
  user: boolean = false;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    let currCart = localStorage.getItem('cart');
    if (currCart) {
      this.cartItems = JSON.parse(currCart);
      this.cartItems?.forEach((item) => {
        this.totalPrice += Number(item.price) * Number(item.quantity);
      });
    }
    this.totalPrice = Number(this.totalPrice.toFixed(2));
    this.user = this.userService.isLogged();
  }

  removeProduct(product: AddProductData) {
    if (this.cartItems) {
      this.cartItems = this.productService.removeProduct(
        product,
        this.cartItems
      );
      this.totalPrice -= Number(product.price) * Number(product.quantity);
      this.totalPrice = Number(this.totalPrice.toFixed(2));
    }

    if (this.cartItems && this.cartItems.length < 1) {
      this.cartItems = undefined;
    }
  }

  sentOrder(data: { userEmail: string; adress: string; phoneNumber: number }) {
    let _ownerId = this.userService.getUserId();
    let products: string[] = [];
    let totalPrice = this.totalPrice;
    if (this.cartItems) {
      this.cartItems.forEach((item) => {
        products.push(item._id);
      });
    }

    let orderData: OrderData = {
      ...data,
      products,
      totalPrice,
      _ownerId,
    };

    this.orderService.createOrder(orderData).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {
        console.log(error.error.message);
      },
    });
  }
}
