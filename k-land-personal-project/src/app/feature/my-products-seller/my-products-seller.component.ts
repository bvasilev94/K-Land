import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AddProductData } from 'src/app/types/Product';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-my-products-seller',
  templateUrl: './my-products-seller.component.html',
  styleUrls: ['./my-products-seller.component.css'],
})
export class MyProductsSellerComponent implements OnInit {
  products: AddProductData[] | undefined;

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.showProducts();
  }

  sortProducts(products: AddProductData[]) {
    const userId = this.userService.getUserId();
    return products.filter((product) => product._ownerId === userId);
  }

  deleteProductBtn(productId: string) {
    this.productService.deleteProduct(productId).subscribe((result) => {
      console.log(result);
      this.showProducts();
    });
  }

  showProducts() {
    this.productService.getProducts().subscribe((result) => {
      if (result) {
        this.products = result;
        this.products = this.sortProducts(result);
      }
    });
  }
}
