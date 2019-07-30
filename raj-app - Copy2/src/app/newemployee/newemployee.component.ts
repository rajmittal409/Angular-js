import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';
import { Employee } from './empbean';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {
  flag = false;
  employee2:any;
  @Input("empobj") employee: Employee[];
  @Input("print") num1: number;

  constructor() {
    this.employee2={
      first:"raj",
      last:"mittal",
      gender:"male",
      price:2343445
    };
  }
  check1() {
    this.flag = true;
  }
  check() {
    this.flag = false;
  }
  
  del(){
    
  }
  ngOnInit() {
  }

}

