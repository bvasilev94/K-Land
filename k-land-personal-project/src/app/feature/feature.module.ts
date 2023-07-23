import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from '@coreui/angular';

import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { MyProductsSellerComponent } from './my-products-seller/my-products-seller.component';
import { UpdateProductSellerComponent } from './update-product-seller/update-product-seller.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddProductComponent,
    MyProductsSellerComponent,
    UpdateProductSellerComponent,
    SearchResultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule,
    FormsModule,
    CarouselModule,
  ],
  exports: [],
})
export class FeatureModule {}
