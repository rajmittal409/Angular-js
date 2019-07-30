import { Component } from '@angular/core';
import {Employee} from './newemployee/empbean';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My DReams';
  emps:Employee[];
  emp:Employee;
  num:number=1;
  gender:string;
constructor(){
  this.emp=new Employee("raj",100,[9832495149,9087654321],"male");
   let emp1=new Employee("raaj",130,[9832495149,9087654321],"male");
  let emp2=new Employee("rajw",140,[9832495149,9087654321],"female");
  let emp3=new Employee("rajsd",300,[9832495149,9087654321],"male");
  let emp4=new Employee("rajd",200,[9832495149,9087654321],"female");
  this.emps=[this.emp,emp1,emp3,emp4,emp2];
}
}