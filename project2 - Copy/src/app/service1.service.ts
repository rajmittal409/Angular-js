import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StringifyOptions } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
http:HttpClient;
fetched=false;
employees:dept[]=[];
  constructor(http:HttpClient) {
    this.http=http;
   }
   fetchEmployees(){
     this.http.get('./assets/emp.json')
     .subscribe(
       data=>{
         if(!this.fetched){
          
           this.convert(data);
           this.fetched=true;
         }
       }
     );
   }
   getEmployees():dept[]{
    return this.employees;
   }
   convert(data:any){
     for(let o of data){
       let e=new dept(o.dptId,o.dptName);
       this.employees.push(e);
       
     }
   }
}
export class Employee1{
  empNo:Number;
  empName: string;
  contact1:Number;
  gender:string;
  constructor(name:string,no:number,ph:number,gen:string) {
    this.empName=name;
    this.empNo=no;
    this.contact1=ph;
    this.gender=gen;
  }
}
export class Employee2{
  id:Number;
  email: string;
  first_name:string;
  last_name:string;
  avatar:string;
  constructor(id:number,email:string,first_name:string,last_name:string,avatar:string) {
    this.first_name=name;
    this.last_name=last_name;
    this.email=email;
    this.id=id;
    this.avatar=avatar;
  }
}
export class Employee3{
  id:Number;
  employee_name:string;
  employee_salary:number;
  employee_age:number;
  constructor(id:number, employee_name:string,  employee_salary:number,   employee_age:number) {
    this.id=id;
    this.employee_salary=employee_salary;
    this.employee_name=employee_name
    this.employee_age=employee_age
  }
}
export class dept{
  dptId:number;
  dptName:string;
  constructor(dpId:number,dpName:string){
    this.dptId=dpId;
    this.dptName=dpName;
  }
}