import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWisePolicyComponent } from './order-wise-policy.component';

describe('OrderWisePolicyComponent', () => {
  let component: OrderWisePolicyComponent;
  let fixture: ComponentFixture<OrderWisePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWisePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWisePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
