/*
* @author: rocky
* Class : GstSeries Model
* Creation date : 29 Feb, 2020
*/

// import packages

export class GstSeriesMaster {

    // knows
    gstSeries: string;
    businessType: string;
    stateName: string;
    stateNameCode: string;
    startYear: number;
    endYear: number;
    gstNum: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    isDeleted: boolean;

    // setters and getters
    // setGstSeries(gstSeries: string): void { this.gstSeries = gstSeries; }
    // getGstSeries(): string { return this.gstSeries; }

    // setBusinessType(businessType: string): void { this.businessType = businessType; }
    // getBusinessType(): string { return this.businessType; }

    // setStateName(stateName: string): void { this.stateName = stateName; }
    // getStateName(): string { return this.stateName; }

    // setStateNameCode(stateNameCode: string): void { this.stateNameCode = stateNameCode; }
    // getStateNameCode(): string { return this.stateNameCode; }

    // setStartYear(startYear: number): void {
    //     const date = new Date();
    //     if (startYear >= date.getTime() && startYear <= 9999) {
    //         this.startYear = startYear;
    //     } else {
    //         console.log(new Error(`Yate should be greater than ${date.getTime()} and less than 9999`));
    //     }
    // }
    // getStartYear(): number { return this.startYear; }

    // setEndYear(endYear: number): void {
    //     if ( this.startYear != null && endYear > this.startYear && endYear <= 9999 ) {
    //         this.endYear = endYear;
    //     } else {
    //         console.log(new Error(`Year should be greater than start year and less than 9999`));
    //     }
    // }
    // getEndYear(): number { return this.endYear; }

    // setGstNum(gstNum: string): void { this.gstNum = gstNum; }
    // getGstNum(): string { return this.gstNum; }
}
