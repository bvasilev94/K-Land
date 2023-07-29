import { Component } from '@angular/core';

import { ProductService } from '../product.service';
import { AddProductData } from 'src/app/types/Product';
import { GetUser } from 'src/app/types/User';
import { UserService } from 'src/app/auth/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  addedTrue: string | undefined;
  errorMessage: string | undefined;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) {}

  addProduct(productData: AddProductData) {
    productData._ownerId = this.userService.getUserId();

    this.productService.addProduct(productData).subscribe({
      next: (response) => {
        if (response.status == 204) {
          this.addedTrue = 'Product added successfuly';
        }

        setTimeout(() => {
          this.addedTrue = undefined;
          this.router.navigate(['/my-products'])
        }, 3000);
      },
      error: (err) => {
        this.errorMessage = err.error.message;

        setTimeout(() => {
          this.errorMessage = undefined;
        }, 5000);
      },
    });
  }
}
