import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrderItemComponent } from './all-order-item.component';

describe('AllOrderItemComponent', () => {
  let component: AllOrderItemComponent;
  let fixture: ComponentFixture<AllOrderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOrderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
