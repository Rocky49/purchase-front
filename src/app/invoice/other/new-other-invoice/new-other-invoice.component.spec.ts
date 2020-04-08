import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOtherInvoiceComponent } from './new-other-invoice.component';

describe('NewOtherInvoiceComponent', () => {
  let component: NewOtherInvoiceComponent;
  let fixture: ComponentFixture<NewOtherInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOtherInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOtherInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
