/*
* @author: rocky
* Class : Hotel Invoice Model
* Creation date : 29 Feb, 2020
*/

// import packages
import { DeptMaster } from './admin/dept.model';
import { ClubMaster } from './admin/club.model';
import { EmpMaster } from './admin/emp.model';
import { CompanyMaster } from './admin/company.model';
import { VendorMaster } from './vendor.model';
import { DivisionMaster } from './admin/division.model';

export class HotelInvoiceMaster {

    // knows
    hotelinvoiceId: string;
    empRef: EmpMaster;
    companyRef: CompanyMaster;
    divisionRef: DivisionMaster;
    travelerName: string;
    branchRef: ClubMaster;
    deptRef: DeptMaster;
    vendorRef: VendorMaster;
    bookingDate: Date;
    checkInDate: Date;
    checkOutDate: Date;
    location: string;
    approval: string;
    invoiceId: string;
    invoiceDate: Date;
    invoiceAmt: Float32Array;
    taxAmt: Float32Array;
    totalAmt: Float32Array;
    creditNoteId: string;
    creditNoteAmt: Float32Array;
    totalPayable: Float32Array;
    chequeNum: bigint;
    chequeDate: Date;
    chequeAmt: Float32Array;
    receivedOn: Date;
    remark: string;
    chequeDispatchedDate: Date;
    status: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    isDeleted: boolean;

    // setters & getters
    // setHotelinvoiceId(hotelinvoiceId: string): void { this.hotelinvoiceId = hotelinvoiceId; }
    // getHotelinvoiceId(): string { return this.hotelinvoiceId; }

    // setEmpRef(empNameRef: EmpMaster): void { this.empRef = empNameRef; }
    // getEmpRef(): EmpMaster { return this.empRef; }

    // setCompanyRef(companyNameRef: CompanyMaster): void { this.companyRef = companyNameRef; }
    // getCompanyRef(): CompanyMaster { return this.companyRef; }

    // setDivision(division: DivisionMaster): void { this.divisionRef = division; }
    // getDivision(): DivisionMaster { return this.divisionRef; }

    // setTravelerName(travelerName: string): void { this.travelerName = travelerName; }
    // getTravelerName(): string { return this.travelerName; }

    // setBranchRef(branchNameRef: ClubMaster): void { this.branchRef = branchNameRef; }
    // getBranchRef(): ClubMaster { return this.branchRef; }

    // setDeptRef(deptRef: DeptMaster): void { this.deptRef = deptRef; }
    // getDeptRef(): DeptMaster { return this.deptRef; }

    // setVendorRef(vendorRef: VendorMaster): void { this.vendorRef = vendorRef; }
    // getVendorRef(): VendorMaster { return this.vendorRef; }

    // setBookingDate(bookingDate: Date) { this.bookingDate = bookingDate; }
    // getBookingDate(): Date { return this.bookingDate; }

    // setCheckInDate(checkInDate: Date): void { this.checkInDate = checkInDate; }
    // getCheckInDate(): Date { return this.checkInDate; }

    // setCheckOutDate(checkOutDate: Date): void { this.checkOutDate = checkOutDate; }
    // getCheckOutDate(): Date { return this.checkOutDate; }

    // setLocation(location: string): void { this.location = location; }
    // getLocation(): string { return this.location; }

    // setApproval(approval: string): void { this.approval = approval; }
    // getApproval(): string { return this.approval; }

    // setinvoiceId(invoiceId: string): void { this.invoiceId = invoiceId; }
    // getinvoiceId(): string { return this.invoiceId; }

    // setInvoiceDate(invoiceDate: Date): void { this.invoiceDate = invoiceDate; }
    // getInvoiceDate(): Date { return this.invoiceDate; }

    // setInvoiceAmt(invoiceAmt: Float32Array): void { this.invoiceAmt = invoiceAmt; }
    // getInvoiceAmt(): Float32Array { return this.invoiceAmt; }

    // setTaxAmt(taxAmt: Float32Array): void { this.taxAmt = taxAmt; }
    // getTaxAmt(): Float32Array { return this.taxAmt; }

    // setTotalAmt(totalAmt: Float32Array): void { this.totalAmt = totalAmt; }
    // getTotalAmt(): Float32Array { return this.totalAmt; }

    // setcreditNote(creditNoteId: string): void { this.creditNoteId = creditNoteId; }
    // getcreditNote(): string { return this.creditNoteId; }

    // setCreditNoteAmt(creditNoteAmt: Float32Array): void { this.creditNoteAmt = creditNoteAmt; }
    // getCreditNoteAmt(): Float32Array { return this.creditNoteAmt; }

    // setTotalPayable(totalPayable: Float32Array): void { this.totalPayable = totalPayable; }
    // getTotalPayable(): Float32Array { return this.totalPayable; }

    // setChequeNum(chequeNum: bigint): void { this.chequeNum = chequeNum; }
    // getChequeNum(): bigint { return this.chequeNum; }

    // setChequeDate(chequeDate: Date): void { this.chequeDate = chequeDate; }
    // getChequeDate(): Date { return this.chequeDate; }

    // setChequeAmt(chequeAmt: Float32Array): void { this.chequeAmt = chequeAmt; }
    // getChequeAmt(): Float32Array { return this.chequeAmt; }

    // setReceivedOn(receivedOn: Date): void { this.receivedOn = receivedOn; }
    // getReceivedOn(): Date { return this.receivedOn; }

    // setRemark(remark: string): void { this.remark = remark; }
    // getRemark(): string { return this.remark; }

    // setChequeDispatchedDate(chequeDispatchedDate: Date): void { this.chequeDispatchedDate = chequeDispatchedDate; }
    // getChequeDispatchedDate(): Date { return this.chequeDispatchedDate; }

    // setStatus(status: string): void { this.status = status; }
    // getStatus(): string { return this.status; }
}
