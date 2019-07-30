export class Employee{
    empNo:Number;
    empName: string;
    ph:Number[];
    gender:string;
    constructor(name:string,no:number,ph:number[],gen:string) {
      this.empName=name;
      this.empNo=no;
      this.ph=ph;
      this.gender=gen;
    }
  }