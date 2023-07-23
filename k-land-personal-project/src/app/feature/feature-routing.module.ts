import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { MyProductsSellerComponent } from './my-products-seller/my-products-seller.component';
import { UpdateProductSellerComponent } from './update-product-seller/update-product-seller.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: 'add-product', component: AddProductComponent },
  {
    path: 'my-products',
    component: MyProductsSellerComponent,
  },
  {
    path: 'my-products/:id/edit',
    component: UpdateProductSellerComponent,
  },
  {path: 'search/:query', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
