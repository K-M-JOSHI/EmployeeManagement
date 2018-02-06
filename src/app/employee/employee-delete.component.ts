import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './employee.model';

@Component({
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  id: number;
  emp = new Employee();
  
  constructor(private route: ActivatedRoute,private router: Router) {
   
  }

  ngOnInit() {
    

    this.id = this.route.snapshot.params['id'];
    this.emp.copyTo(JSON.parse(localStorage.getItem("user"+this.id)));
    
    if(window.confirm("Delete: "+this.emp.firstName))
      if(localStorage.getItem("user"+this.id) != null){
        localStorage.removeItem("user"+this.id);    
      }

    this.router.navigateByUrl('/employees');
  }



}
