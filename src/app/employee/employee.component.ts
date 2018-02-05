import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'pm-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  codingLanguages: string[] ;
  qualifications: string[] ;
  experience: string[] ;
  selectedItemQua: string ;
  selectedItemExp: string ;
  emp = new Employee();
 
  ngOnInit() {
    this.codingLanguages = ['C/C++','Java','C#','PHP','Python'];
    this.qualifications = ['B.Tech','M.Tech','BCA','MCA'];
    this.experience = ['One-Year','Two-Year','Three-Year','Four-Year-Plus'];
  }
 
  printData(empData: Employee){
    
    console.log(JSON.stringify(empData));
    window.location.reload(true);
  }


}
