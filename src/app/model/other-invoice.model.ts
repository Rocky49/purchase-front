import { DivisionMaster } from './admin/division.model';
/*
* @author: rocky
* Class : Other Invoice Model
* Creation date : 29 Feb, 2020
*/

// import packages
import { VendorMaster } from './vendor.model';
import { DeptMaster } from './admin/dept.model';
import { ClubMaster } from './admin/club.model';
import { CompanyMaster } from './admin/company.model';
import { EmpMaster } from './admin/emp.model';

export class OtherInvoiceMaster {

    // knows
    otherInvoiceId: string;
    empRef: EmpMaster;
    companyRef: CompanyMaster;
    divisionRef: DivisionMaster;
    travelerName: string;
    branchRef: ClubMaster;
    deptRef: DeptMaster;
    purchaseDetail: string;
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
    // setOtherInvoiceId(otherInvoiceId: string): void { this.otherInvoiceId = otherInvoiceId; }
    // getOtherInvoiceId(): string { return this.otherInvoiceId; }

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

    // setPurchaseDetail(purchaseDetail: string): void { this.purchaseDetail = purchaseDetail; }
    // getPurchaseDetail(): string { return this.purchaseDetail; }

    // setVendorRef(vendorRef: VendorMaster) { this.vendorRef = vendorRef; }
    // getVendorRef(): VendorMaster { return this.vendorRef; }

    // setInvoiceId(invoiceId: string) { this.invoiceId = invoiceId; }
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
