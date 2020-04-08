import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHotelInvoiceComponent } from './edit-hotel-invoice.component';

describe('EditHotelInvoiceComponent', () => {
  let component: EditHotelInvoiceComponent;
  let fixture: ComponentFixture<EditHotelInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHotelInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHotelInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
