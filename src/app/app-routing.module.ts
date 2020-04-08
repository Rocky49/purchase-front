import { EditHotelInvoiceComponent } from './invoice/hotel/edit-hotel-invoice/edit-hotel-invoice.component';
import { AllHotelInvoiceComponent } from './invoice/hotel/all-hotel-invoice/all-hotel-invoice.component';
import { NewHotelInvoiceComponent } from './invoice/hotel/new-hotel-invoice/new-hotel-invoice.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { AllOrderComponent } from './order/all-order/all-order.component';
import { NewOrderComponent } from './order/new-order/new-order.component';
import { EditVendorComponent } from './vendor/edit-vendor/edit-vendor.component';
import { NewVendorComponent } from './vendor/new-vendor/new-vendor.component';
import { AllVendorComponent } from './vendor/all-vendor/all-vendor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AllVendorComponent,
    // loadChildren: () => import('./module/material-component.module').then(m => m.MaterialComponentModule)
  },
  {
    path: 'new-vendor',
    component: NewVendorComponent
  },
  {
    path: 'edit-vendor',
    component: EditVendorComponent
  },
  {
    path: 'new-order',
    component: NewOrderComponent
  },
  {
    path: 'all-order',
    component: AllOrderComponent
  },
  {
    path: 'edit-order',
    component: EditOrderComponent
  },
  {
    path: 'new-hotel-invoice',
    component: NewHotelInvoiceComponent
  },
  {
    path: 'all-hotel-invoice',
    component: AllHotelInvoiceComponent
  },
  {
    path: 'edit-hotel-invoice',
    component: EditHotelInvoiceComponent
  },
  {
    path: 'new-travel-invoice',
    component: EditHotelInvoiceComponent
  },
  {
    path: 'all-travel-invoice',
    component: EditHotelInvoiceComponent
  },
  {
    path: 'edit-travel-invoice',
    component: EditHotelInvoiceComponent
  },
  {
    path: 'new-other-invoice',
    component: EditHotelInvoiceComponent
  },
  {
    path: 'all-other-invoice',
    component: EditHotelInvoiceComponent
  },
  {
    path: 'edit-other-invoice',
    component: EditHotelInvoiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
