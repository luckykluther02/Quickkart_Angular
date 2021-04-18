import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersucceedComponent } from './ordersucceed.component';

describe('OrdersucceedComponent', () => {
  let component: OrdersucceedComponent;
  let fixture: ComponentFixture<OrdersucceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersucceedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersucceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
