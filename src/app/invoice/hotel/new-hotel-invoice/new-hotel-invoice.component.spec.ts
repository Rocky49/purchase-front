import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHotelInvoiceComponent } from './new-hotel-invoice.component';

describe('NewHotelInvoiceComponent', () => {
  let component: NewHotelInvoiceComponent;
  let fixture: ComponentFixture<NewHotelInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHotelInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHotelInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
