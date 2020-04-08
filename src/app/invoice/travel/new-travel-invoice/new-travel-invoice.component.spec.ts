import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTravelInvoiceComponent } from './new-travel-invoice.component';

describe('NewTravelInvoiceComponent', () => {
  let component: NewTravelInvoiceComponent;
  let fixture: ComponentFixture<NewTravelInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTravelInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTravelInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
