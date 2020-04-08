import { FormsModule } from '@angular/forms';
import { MaterialComponentModule } from './material-component.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/*
* @author: rocky
* Class : All component declration Module
* Creation date : 03 March, 2020
*/

// imports
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { NewOrderComponent } from '../order/new-order/new-order.component';
import { AllOrderComponent } from '../order/all-order/all-order.component';
import { NewVendorComponent } from '../vendor/new-vendor/new-vendor.component';
import { AllVendorComponent } from '../vendor/all-vendor/all-vendor.component';
import { NewHotelInvoiceComponent } from '../invoice/hotel/new-hotel-invoice/new-hotel-invoice.component';
import { AllHotelInvoiceComponent } from '../invoice/hotel/all-hotel-invoice/all-hotel-invoice.component';
import { EditHotelInvoiceComponent } from '../invoice/hotel/edit-hotel-invoice/edit-hotel-invoice.component';
import { NewTravelInvoiceComponent } from '../invoice/travel/new-travel-invoice/new-travel-invoice.component';
import { AllTravelInvoiceComponent } from '../invoice/travel/all-travel-invoice/all-travel-invoice.component';
import { EditTravelInvoiceComponent } from '../invoice/travel/edit-travel-invoice/edit-travel-invoice.component';
import { NewOtherInvoiceComponent } from '../invoice/other/new-other-invoice/new-other-invoice.component';
import { AllOtherInvoiceComponent } from '../invoice/other/all-other-invoice/all-other-invoice.component';
import { EditOtherInvoiceComponent } from '../invoice/other/edit-other-invoice/edit-other-invoice.component';
import { EditOrderComponent } from '../order/edit-order/edit-order.component';
import { EditVendorComponent } from '../vendor/edit-vendor/edit-vendor.component';
import { NewOrderItemComponent } from '../order/items/new-order-item/new-order-item.component';
import { AllOrderItemComponent } from '../order/items/all-order-item/all-order-item.component';
import { EditOrderItemComponent } from '../order/items/edit-order-item/edit-order-item.component';
import { NewCompanyComponent } from '../admin/company/new-company/new-company.component';
import { EditCompanyComponent } from '../admin/company/edit-company/edit-company.component';
import { NewClubComponent } from '../admin/club/new-club/new-club.component';
import { EditClubComponent } from '../admin/club/edit-club/edit-club.component';
import { NewDeptComponent } from '../admin/dept/new-dept/new-dept.component';
import { EditDeptComponent } from '../admin/dept/edit-dept/edit-dept.component';
import { NewEmployeeComponent } from '../admin/employee/new-employee/new-employee.component';
import { EditEmployeeComponent } from '../admin/employee/edit-employee/edit-employee.component';
import { NewPolicyComponent } from '../policy/new-policy/new-policy.component';
import { EditPolicyComponent } from '../policy/edit-policy/edit-policy.component';

@NgModule({
    declarations: [
      NewOrderComponent,
      AllOrderComponent,
      NewVendorComponent,
      AllVendorComponent,
      NewHotelInvoiceComponent,
      AllHotelInvoiceComponent,
      EditHotelInvoiceComponent,
      NewTravelInvoiceComponent,
      AllTravelInvoiceComponent,
      EditTravelInvoiceComponent,
      NewOtherInvoiceComponent,
      AllOtherInvoiceComponent,
      EditOtherInvoiceComponent,
      EditOrderComponent,
      EditVendorComponent,
      NewOrderItemComponent,
      AllOrderItemComponent,
      EditOrderItemComponent,
      NewCompanyComponent,
      EditCompanyComponent,
      NewClubComponent,
      EditClubComponent,
      NewDeptComponent,
      EditDeptComponent,
      NewEmployeeComponent,
      EditEmployeeComponent,
      NewPolicyComponent,
      EditPolicyComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MaterialComponentModule
  ]})

    export class AllComponentModule {}
