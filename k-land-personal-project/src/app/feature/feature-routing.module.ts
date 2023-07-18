import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { MyProductsSellerComponent } from './my-products-seller/my-products-seller.component';

const routes: Routes = [
  { path: 'add-product', component: AddProductComponent },
  { path: 'my-products', component: MyProductsSellerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
