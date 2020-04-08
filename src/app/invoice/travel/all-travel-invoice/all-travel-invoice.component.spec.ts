import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTravelInvoiceComponent } from './all-travel-invoice.component';

describe('AllTravelInvoiceComponent', () => {
  let component: AllTravelInvoiceComponent;
  let fixture: ComponentFixture<AllTravelInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTravelInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTravelInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
