import { DivisionMaster } from './admin/division.model';
/*
* @author: rocky
* Class : Order Model
* Creation date : 29 Feb, 2020
*/

// import packages
import { GstSeriesMaster } from './admin/gst.model';
import { ClubMaster } from './admin/club.model';
import { DeptMaster } from './admin/dept.model';
import { VendorMaster } from './vendor.model';
import { OrderTypeMaster } from './admin/order-type.model';

export class OrderMaster {

    // knows
    orderId: string;
    orderTypeRef: OrderTypeMaster;
    divisionRef: DivisionMaster;
    gstSeriesRef: GstSeriesMaster;
    requesterName: string;
    branchRef: ClubMaster;
    deptRef: DeptMaster;
    approval: string;
    vendorRef: VendorMaster;
    subject: string;
    poBody: string;
    status: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    isDeleted: boolean;

    // setters & getters
    // setOrderId(orderId: string): void { this.orderId = orderId; }
    // getOrderId(): string { return this.orderId; }

    // setOrderType(orderType: OrderTypeMaster): void { this.orderTypeRef = orderType; }
    // getOrderType(): OrderTypeMaster { return this.orderTypeRef; }

    // setDivName(divName: DivisionMaster): void { this.divisionRef = divName; }
    // getDivName(): DivisionMaster { return this.divisionRef; }

    // setGstSeriesRef(gstSeriesRef: GstSeriesMaster): void { this.gstSeriesRef = gstSeriesRef; }
    // getGstSeriesRef(): GstSeriesMaster { return this.gstSeriesRef; }

    // setRequesterName(requesterName: string): void { this.requesterName = requesterName; }
    // getRequesterName(): string { return this.requesterName; }

    // setBranchRef(branchRef: ClubMaster): void { this.branchRef = branchRef; }
    // getBranchRef(): ClubMaster { return this.branchRef; }

    // setDeptRef(deptRef: DeptMaster): void { this.deptRef = deptRef; }
    // getDeptRef(): DeptMaster { return this.deptRef; }

    // setApproval(approval: string) { this.approval = approval; }
    // getApproval(): string { return this.approval; }

    // setVendorRef(vendorRef: VendorMaster): void { this.vendorRef = vendorRef; }
    // getVendorRef(): VendorMaster { return this.vendorRef; }

    // setSubject(subject: string): void { this.subject = subject; }
    // getSubject(): string { return this.subject; }

    // setPoBody(poBody: string): void { this.poBody = poBody; }
    // getPoBody(): string { return this.poBody; }

    // setStatus(status: string): void { this.status = status; }
    // getStatus(): string { return this.status; }
}
