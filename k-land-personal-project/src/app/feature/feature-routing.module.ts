import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product-seller/add-product.component';
import { MyProductsSellerComponent } from './my-products-seller/my-products-seller.component';
import { UpdateProductSellerComponent } from './update-product-seller/update-product-seller.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

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
  { path: 'search/:query', component: SearchResultComponent },
  { path: 'details/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
