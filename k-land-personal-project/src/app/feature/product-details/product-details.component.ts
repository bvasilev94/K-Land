import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { AddProductData } from 'src/app/types/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | AddProductData;
  productQuantity: number = 1;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');

    productId &&
      this.productService.getSingleProduct(productId).subscribe((result) => {
        if (result.body) {
          this.productData = result.body;
        }
      });
  }

  handleQtyClick(value: string) {
    if (value === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && value === 'minus') {
      this.productQuantity -= 1;
    }
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
