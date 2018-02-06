import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({

  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  total: string ;
  count: number ;
  employees = [];

  
  constructor() { 
    this.total = localStorage.getItem("count");
    this.count = +this.total ;
  }

  ngOnInit() {
    for(var j = 1; j <= this.count; j++ )
    {
      var user = localStorage.getItem("user"+j);
      if(user!=null)
      {
        var values = JSON.parse(user);
        this.employees.push(values);
      }
    }
  }

}
