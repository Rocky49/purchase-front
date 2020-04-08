/*
* @author: rocky
* Class : Order Item Model
* Creation date : 29 Feb, 2020
*/

// import packages
import { OrderMaster } from './order.model';
import { GstSeriesMaster } from './admin/gst.model';

export class OrderItemMaster {

    // knows
    orderItemNum: bigint;
    orderRef: OrderMaster;
    year: number;
    gstSeriesRef: GstSeriesMaster;
    invoiceNum: bigint;
    description: string;
    quantity: bigint;
    units: string;
    unitRate: Float32Array;
    vtax: Float32Array;
    stax: Float32Array;
    gst: Float32Array;
    totalAmt: Float32Array;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    isDeleted: boolean;

    // setters & getters
    // setOrderItemNum(orderItemNum: bigint) { this.orderItemNum = orderItemNum; }
    // getOrderItemNum(): bigint { return this.orderItemNum; }

    // setOrderRef(orderRef: OrderMaster): void { this.orderRef = orderRef; }
    // getOrderRef(): OrderMaster { return this.orderRef; }

    // setYear(year: number): void { this.year = year; }
    // getYear(): number { return this.year; }

    // setGstSeriesRef(gstSeriesRef: GstSeriesMaster): void { this.gstSeriesRef = gstSeriesRef; }
    // getGstSeriesRef(): GstSeriesMaster { return this.gstSeriesRef; }

    // setInvoiceNum(invoiceNum: bigint): void { this.invoiceNum = invoiceNum; }
    // getInvoiceNum(): bigint { return this.invoiceNum; }

    // setDescription(description: string): void { this.description = description; }
    // getDescription(): string { return this.description; }

    // setQuantity(quantity: bigint): void { this.quantity =  quantity; }
    // getQuantity(): bigint { return this.quantity; }

    // setUnits(units: string): void { this.units = units; }
    // getUnits(): string { return this.units; }

    // setUnitRate(unitRate: Float32Array): void { this.unitRate = unitRate; }
    // getUnitRate(): Float32Array { return this.unitRate; }

    // setVtax(vtax: Float32Array): void { this.vtax = vtax; }
    // getVtax(): Float32Array { return this.vtax; }

    // setStax(stax: Float32Array): void { this.stax = stax; }
    // getStax(): Float32Array { return this.stax; }

    // setGst(gst: Float32Array): void { this.gst = gst; }
    // getGst(): Float32Array { return this.gst; }

    // setTotalAmt(totalAmt: Float32Array): void { this.totalAmt = totalAmt; }
    // getTotalAmt(): Float32Array { return this.totalAmt; }
}
