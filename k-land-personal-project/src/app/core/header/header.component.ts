import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/auth/user.service';
import { ProductService } from 'src/app/feature/product.service';
import { AddProductData } from 'src/app/types/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  allProducts: AddProductData[] | undefined;
  mathchingProducts: AddProductData[] | undefined;
  cartItems: number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.allProducts = data;
    });

    let cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length;
    }

    this.productService.cartEmmiter.subscribe((items) => {
      this.cartItems = items.length
    })
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      if (this.allProducts) {
        this.mathchingProducts = this.allProducts.filter(
          (product) =>
            product.name
              .toLocaleLowerCase()
              .includes(element.value.toLocaleLowerCase()) ||
            product.category
              .toLocaleLowerCase()
              .includes(element.value.toLocaleLowerCase()) ||
            product.manufacturer
              .toLocaleLowerCase()
              .includes(element.value.toLocaleLowerCase())
        );
        if (this.mathchingProducts.length > 5) {
          this.mathchingProducts.length = 5;
        }
      }
    }
  }

  hideSearchSuggestion() {
    this.mathchingProducts = undefined;
  }

  submitSearch(searchValue: string) {
    this.router.navigate([`search/${searchValue}`]);
  }

  populateSearch(value: string) {
    this.submitSearch(value);
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged();
  }

  get isSeller() {
    let data = this.userService.getUser();
    let user = data && JSON.parse(data);
    return user.seller;
  }

  logout(): void {
    this.userService.userLogout();
    this.router.navigate(['/']);
  }
}
