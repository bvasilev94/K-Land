import { Component } from '@angular/core';

import { ProductService } from '../product.service';
import { AddProductData } from 'src/app/types/Product';
import { GetUser } from 'src/app/types/User';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private productService: ProductService) {}

  addProduct(productData: AddProductData) {
    let _ownerId: GetUser;
    let user = localStorage.getItem('user');
    if (user !== null) {
      _ownerId = JSON.parse(user);
      productData._ownerId = _ownerId._id;
      console.log(_ownerId._id);
    }

    this.productService.addProduct(productData).subscribe((result) => {
      console.log(result);
    });
  }
}
