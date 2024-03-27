// import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class VehicleModule { 
  constructor(
  public vehicleId?:number,
  public rent?:number,
  public vehicleLocation?:string,
  public isAvailable?:boolean,
  public modelYear?:number,
  public modelName?:string){

  }

}
