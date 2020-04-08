/*
* @author: rocky
* Class : Club Model
* Creation date : 29 Feb, 2020
*/

// import packages
import { CompanyMaster } from './company.model';

export class ClubMaster {

    // knows
    clubId: string;
    clubName: string;
    sector: string;
    clubAddress: string;
    clubNum: bigint;
    panNum: string;
    stax: string;
    gst: string;
    companyRef: CompanyMaster;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    isDeleted: boolean;

    // setters & getters
    // setClubId(clubId: string): void { this.clubId = clubId; }
    // getClubId(): string { return this.clubId; }

    // setClubName(clubName: string): void { this.clubName = clubName; }
    // getClubName(): string { return this.clubName; }

    // setSector(sector: string): void { this.sector = sector; }
    // getSector(): string { return this.sector; }

    // setClubAddress(clubAddress: string): void { this.clubAddress = clubAddress; }
    // getClubAddress(): string { return this.clubAddress; }

    // setClubNum(clubNum: bigint): void { this.clubNum = clubNum; }
    // getClubNum(): bigint { return this.clubNum; }

    // setPanNum(panNum: string): void { this.panNum = panNum; }
    // getPanNum(): string { return this.panNum; }

    // setStax(stax: string): void { this.stax = stax; }
    // getStax(): string { return this.stax; }

    // setGst(gst: string): void { this.gst = gst; }
    // getGst(): string { return this.gst; }

    // setCompanyRef(companyRef: CompanyMaster) { this.companyRef = companyRef; }
    // getCompanyRef(): CompanyMaster { return this.companyRef; }
}
