import { GenericService } from './../../service/generic.service';
import { OrderMaster } from './../../model/order.model';
import { VendorMaster } from './../../model/vendor.model';
import { ClubMaster } from './../../model/admin/club.model';
import { CompanyMaster } from './../../model/admin/company.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  picker;
  isLinear = true;
  firstFormGroup;
  orderTypes: string[];
  companies: CompanyMaster[];
  divisions: string[];
  branches: ClubMaster[];
  departments: string[];
  vendors: VendorMaster[];
  status = ['Pending', 'Close'];
  orderObj = new OrderMaster();
  orderResp: OrderMaster;

  constructor(private orderService: GenericService) { }

  ngOnInit() {
    this.getOrderTypeList();
    this.getCompanyList();
    this.getDivisionList();
    this.getClubList();
    this.getDepartmentList();
    this.getVendorList();
  }

  setOrderController() {
    const path = '/order/new-order';
    this.orderService.add(path, this.orderObj).subscribe(data => {
      this.orderResp = data;
    }, err => {
      if (err.status === 500) {
        console.log('internal server error');
      } else {
        console.log(err);
      }
    });
  }

  getDepartmentList() {
    const path = '/department/department-list';
    this.orderService.getAll(path).subscribe(data => {
      console.log('getDepartmentList');
      console.log(data);
      this.departments = data;
    }, err => {
      if (err.status === 204) {
        console.log('no-content');
      } else {
        console.log('error contact Developer');
      }
    });
    return this.departments;
  }

  getClubList(): ClubMaster[] {
    const path = '/club/club-list';
    this.orderService.getAll(path).subscribe(data => {
      console.log(data);
      this.branches = data;
    }, err => {
      console.log(err);
    });
    return this.branches;
  }

  getCompanyList(): CompanyMaster[] {
    const path = '/company/company-list';
    this.orderService.getAll(path).subscribe(data => {
      this.companies = data;
    }, err => {
      if (err.status === 204) {
        console.log('no-content');
      } else {
        console.log('error contact Developer');
      }
    });
    return this.companies;
  }

  getDivisionList(): string[] {
    const path = '/division/division-list';
    this.orderService.getAll(path).subscribe(data => {
      this.divisions = data;
    }, err => {
      if (err.status === 204) {
        console.log('no-content');
      } else {
        console.log(err.getMessage());
      }
    });
    return this.divisions;
  }

  getVendorList(): VendorMaster[] {
    const path = '/vendor/vendor-list';
    this.orderService.getAll(path).subscribe(data => {
      console.log('vendors: ' + data);
      this.vendors = data;
    }, err => {
      if (err.status === 204) {
        console.log('no-content');
      } else {
        console.log(err);
      }
    });
    return this.vendors;
  }

  getOrderTypeList(): string[] {
    const path = '/order-type/order-type-list';
    this.orderService.getAll(path).subscribe(data => {
        this.orderTypes = data;
    }, err => {
        console.log(err);
    });
    return this.orderTypes;
}

}
