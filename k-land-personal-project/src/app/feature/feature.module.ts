import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { MyProductsSellerComponent } from './my-products-seller/my-products-seller.component';

@NgModule({
  declarations: [HomeComponent, AddProductComponent, MyProductsSellerComponent],
  imports: [CommonModule, RouterModule, FeatureRoutingModule, FormsModule],
  exports: [HomeComponent, AddProductComponent],
})
export class FeatureModule {}
