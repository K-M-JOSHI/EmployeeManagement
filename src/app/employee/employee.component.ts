import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  codingLanguages: string[] ;
  qualifications: string[] ;
  experience: string[] ;
  emp = new Employee();
  title: string;

  ngOnInit() {
    this.codingLanguages = ['C/C++','Java','C#','PHP','Python'];
    this.qualifications = ['B.Tech','M.Tech','BCA','MCA'];
    this.experience = ['One-Year','Two-Year','Three-Year','Four-Year-Plus'];
    this.title = 'Add New Employee:'
  }
 
  addData(empData: Employee){

    if(localStorage){ 
      if(localStorage.getItem("count") === null){
        
        empData.id = 1;
				
				localStorage.setItem("count",1+"");
				localStorage.setItem("user1", JSON.stringify(empData, null, 4));
								
			}else{
				
				  var x = localStorage.getItem("count");
					var y  = (+x) + 1;
					empData.id = y;
					localStorage.setItem("user"+y, JSON.stringify(empData, null, 4));
					localStorage.setItem("count",y+"");
				
				}
			
      }
   
    }


  }
