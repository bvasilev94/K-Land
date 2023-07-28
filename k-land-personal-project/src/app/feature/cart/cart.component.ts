import { Component, OnInit } from '@angular/core';
import { AddProductData } from 'src/app/types/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: AddProductData[] | undefined

  constructor() {}

  ngOnInit(): void {
    let currCart = localStorage.getItem('cart');
    if (currCart) {
      this.cartItems = JSON.parse(currCart);
    }
  }
}
