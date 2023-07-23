import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { AddProductData } from 'src/app/types/Product';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  allProducts: AddProductData[] | undefined;
  foundProducts: AddProductData[] | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.activeRoute.paramMap.subscribe((params) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');

    this.productService.getProducts().subscribe((result) => {
      this.allProducts = result;

      if (this.allProducts) {
        this.foundProducts = this.allProducts?.filter((product) => {
          if (query) {
            return (
              product.name
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase()) ||
              product.category
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase()) ||
              product.manufacturer
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase())
            );
          }
          return;
        });
      }
    });
  }
}
