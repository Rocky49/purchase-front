import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHotelInvoiceComponent } from './all-hotel-invoice.component';

describe('AllHotelInvoiceComponent', () => {
  let component: AllHotelInvoiceComponent;
  let fixture: ComponentFixture<AllHotelInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHotelInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHotelInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
