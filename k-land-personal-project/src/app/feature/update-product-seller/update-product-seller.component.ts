import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { AddProductData } from 'src/app/types/Product';

@Component({
  selector: 'app-update-product-seller',
  templateUrl: './update-product-seller.component.html',
  styleUrls: ['./update-product-seller.component.css'],
})
export class UpdateProductSellerComponent implements OnInit {
  productData: undefined | AddProductData;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId &&
      this.productService.getSingleProduct(productId).subscribe((response) => {
        if (response.statusText === 'OK' && response.body) {
          this.productData = response.body;
        }
      });
  }
}
