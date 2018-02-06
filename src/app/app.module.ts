import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list.component';
import { ErrorPageComponent } from './error-message/error-page.component';
import { EmployeeEditComponent } from './employee/employee-edit.component';
import { EmployeeDeleteComponent } from './employee/employee-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    ErrorPageComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'employees', component: EmployeeListComponent },
      { path: 'add_employee', component: EmployeeComponent },
      { path: 'edit/:id', component: EmployeeEditComponent },
      { path: 'delete/:id', component: EmployeeDeleteComponent},
      { path: '', redirectTo: 'employees', pathMatch: 'full'},
      { path: '**', component:ErrorPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
