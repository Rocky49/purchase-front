import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOtherInvoiceComponent } from './all-other-invoice.component';

describe('AllOtherInvoiceComponent', () => {
  let component: AllOtherInvoiceComponent;
  let fixture: ComponentFixture<AllOtherInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOtherInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOtherInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
