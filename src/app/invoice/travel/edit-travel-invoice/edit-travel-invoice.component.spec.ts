import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTravelInvoiceComponent } from './edit-travel-invoice.component';

describe('EditTravelInvoiceComponent', () => {
  let component: EditTravelInvoiceComponent;
  let fixture: ComponentFixture<EditTravelInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTravelInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTravelInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
