import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AddProductData } from 'src/app/types/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: AddProductData[] | undefined;
  allProducts: AddProductData[] | undefined;
  productData: undefined | AddProductData;
  productQuantity: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getLastProducts().subscribe((data) => {
      this.products = data;
    });

    this.productService.getProducts().subscribe((data) => {
      this.allProducts = data;
    });
  }

  addToCart() {
    if (this.productData) {
      if (localStorage.getItem('user')) {
      } else {
        this.productData.quantity = this.productQuantity;
        this.productService.addToCart(this.productData);
      }
    }
  }
}
