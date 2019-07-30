import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
  myDate:string;

  constructor() {
    setInterval(()=>{let myDate1=new Date();

        this.myDate=myDate1.toDateString()+" "+myDate1.toLocaleTimeString();
    },1000);
  }

  ngOnInit() {
  }

}
