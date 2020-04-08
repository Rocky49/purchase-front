import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOtherInvoiceComponent } from './edit-other-invoice.component';

describe('EditOtherInvoiceComponent', () => {
  let component: EditOtherInvoiceComponent;
  let fixture: ComponentFixture<EditOtherInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOtherInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOtherInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
