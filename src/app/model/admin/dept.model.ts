/*
* @author: rocky
* Class : Department Model
* Creation date : 29 Feb, 2020
*/

// import packages

export class DeptMaster {

    // knows
    deptId: bigint;
    deptName: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    isDeleted: boolean;

    // setters & getters
    // setDeptId(deptId: bigint): void { this.deptId = deptId; }
    // getDeptId(): bigint { return this.deptId; }

    // setDeptName(deptName: string): void { this.deptName = deptName; }
    // getDeptName(): string { return this.deptName; }
}
