import { DivisionMaster } from './admin/division.model';
/*
* @author: rocky
* Class : Travel Invoice Model
* Creation date : 29 Feb, 2020
*/

// import packages
import { EmpMaster } from './admin/emp.model';
import { CompanyMaster } from './admin/company.model';
import { ClubMaster } from './admin/club.model';
import { DeptMaster } from './admin/dept.model';
import { VendorMaster } from './vendor.model';

export class TravelInvoiceMaster {

    // knows
    travelInvoiceId: string;
    empRef: EmpMaster;
    companyRef: CompanyMaster;
    divisionRef: DivisionMaster;
    travelerName: string;
    branchRef: ClubMaster;
    deptRef: DeptMaster;
    sector: string;
    modeOfTraveling: string;
    bookingDate: Date;
    travelPeriodFrom: Date;
    travelPeriodTo: Date;
    location: string;
    approval: string;
    vendorRef: VendorMaster;
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
    // setTravelInvoiceId(travelInvoiceId: string): void { this.travelInvoiceId = travelInvoiceId; }
    // getTravelInvoiceId(): string { return this.travelInvoiceId; }

    // setEmpRef(empRef: EmpMaster): void { this.empRef = empRef; }
    // getEmpRef(): EmpMaster { return this.empRef; }

    // setCompanyRef(companyRef: CompanyMaster): void { this.companyRef = companyRef; }
    // getCompanyRef(): CompanyMaster { return this.companyRef; }

    // setDivName(divName: DivisionMaster): void { this.divisionRef = divName; }
    // getDivName(): DivisionMaster { return this.divisionRef; }

    // setTravelerName(travelerName: string): void { this.travelerName = travelerName; }
    // getTravelerName(): string { return this.travelerName; }

    // setBranchRef(branchRef: ClubMaster): void { this.branchRef = branchRef; }
    // getBranchRef(): ClubMaster { return this.branchRef; }

    // setDeptRef(deptRef: DeptMaster): void { this.deptRef = deptRef; }
    // getDeptRef(): DeptMaster { return this.deptRef; }

    // setSector(sector: string): void { this.sector = sector; }
    // getSector(): string { return this.sector; }

    // setModeOfTraveling(modeOfTraveling: string): void { this.modeOfTraveling = modeOfTraveling; }
    // getModeOfTraveling(): string { return this.modeOfTraveling; }

    // setBookingDate(bookingDate: Date): void { this.bookingDate = bookingDate; }
    // getBookingDate(): Date { return this.bookingDate; }

    // setTravelPeriodFrom(travelPeriodFrom: Date): void { this.travelPeriodFrom = travelPeriodFrom; }
    // getTravelPeriodFrom(): Date { return this.travelPeriodFrom; }

    // setTravelPeriodTo(travelPeriodTo: Date): void { this.travelPeriodTo = travelPeriodTo; }
    // getTravelPeriodTo(): Date { return this.travelPeriodTo; }

    // setLocation(location: string): void { this.location = location; }
    // getLocation(): string { return this.location; }

    // setApproval(approval: string): void { this.approval = approval; }
    // getApproval(): string { return this.approval; }

    // setVendorRef(vendorRef: VendorMaster): void { this.vendorRef = vendorRef; }
    // getVendorRef(): VendorMaster { return this.vendorRef; }

    // setInvoiceId(invoiceId: string): void { this.invoiceId = invoiceId; }
    // getInvoiceId(): string { return this.invoiceId; }

    // setInvoiceDate(invoiceDate: Date): void { this.invoiceDate = invoiceDate; }
    // getInvoiceDate(): Date { return this.invoiceDate; }

    // setInvoiceAmt(invoiceAmt: Float32Array): void { this.invoiceAmt = invoiceAmt; }
    // getInvoiceAmt(): Float32Array { return this.invoiceAmt; }

    // setTaxAmt(taxAmt: Float32Array): void { this.taxAmt = taxAmt; }
    // getTaxAmt(): Float32Array { return this.taxAmt; }

    // setTotalAmt(totalAmt: Float32Array): void { this.totalAmt = totalAmt; }
    // getTotalAmt(): Float32Array { return this.totalAmt; }

    // setcreditNote(creditNoteId: string): void { this.creditNoteId = creditNoteId; }
    // getCreditNote(): string { return this.creditNoteId; }

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
