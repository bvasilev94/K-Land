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

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getLastProducts().subscribe((data) => {
      this.products = data;
    });

    this.productService.getProducts().subscribe((data) => {
      this.allProducts = data;
    });
  }
}
