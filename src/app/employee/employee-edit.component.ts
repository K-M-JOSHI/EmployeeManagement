import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './employee.model';



@Component({
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id: number ;
  codingLanguages: string[] ;
  qualifications: string[] ;
  experience: string[] ;
  emp = new Employee();
  title: string;
  
  
  constructor(private route: ActivatedRoute,private router: Router) {
   
  }

  ngOnInit(): void {
  
    this.id = this.route.snapshot.params['id'];

    if(localStorage.getItem("user"+this.id) != null)
       this.emp.copyTo(JSON.parse(localStorage.getItem("user"+this.id)));
    else{
      alert("Invalid Employee ID");
      this.router.navigateByUrl('/employees');
    }

    this.codingLanguages = ['C/C++','Java','C#','PHP','Python'];
    this.qualifications = ['B.Tech','M.Tech','BCA','MCA'];
    this.experience = ['One-Year','Two-Year','Three-Year','Four-Year-Plus'];
    this.title = 'Edit Your Details:';
    
 }

  ngAfterViewInit(){
    for(let lang of this.emp.languages)
    {
      var x = <HTMLInputElement>document.getElementById(lang);
      x.checked = true;
    }
  }
 
  addData(empData: Employee){
       
    if(localStorage){
     
      if(localStorage.getItem("user"+empData.id) != null){
        
          localStorage.removeItem("user"+empData.id);
								
					localStorage.setItem("user"+empData.id, JSON.stringify(empData, null, 4));
        
        }
			
      }

  }
  

}
