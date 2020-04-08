/*
* @author: rocky
* Class : Company Model
* Creation date : 29 Feb, 2020
*/

// import packages

export class CompanyMaster {

    // knows
    companyId: bigint;
    companyName: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    isDeleted: boolean;

    // setters & getters
    // setCompanyId(companyId: bigint): void { this.companyId = companyId; }
    // getCompanyId(): bigint { return this.companyId; }

    // setCompanyName(companyName: string): void { this.companyName = companyName; }
    // getCompanyName(): string { return this.companyName; }
}
