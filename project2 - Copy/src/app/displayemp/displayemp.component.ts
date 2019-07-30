import { Component, OnInit } from '@angular/core';
import{Employee} from './empbean';
import { Service1Service, dept} from '../service1.service';
@Component({
  selector: 'app-displayemp',
  templateUrl: './displayemp.component.html',
  styleUrls: ['./displayemp.component.css']
})
export class DisplayempComponent implements OnInit {
  emps:dept[]=[];
  
  num:number=1;
  gender:string;
  service:Service1Service;
constructor(service:Service1Service){
  this.service=service;
}
  ngOnInit() {
    this.service.fetchEmployees();
    this.emps=this.service.getEmployees();
  }

}
