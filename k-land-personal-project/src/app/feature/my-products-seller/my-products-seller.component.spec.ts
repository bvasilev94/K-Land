import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductsSellerComponent } from './my-products-seller.component';

describe('MyProductsSellerComponent', () => {
  let component: MyProductsSellerComponent;
  let fixture: ComponentFixture<MyProductsSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProductsSellerComponent]
    });
    fixture = TestBed.createComponent(MyProductsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
