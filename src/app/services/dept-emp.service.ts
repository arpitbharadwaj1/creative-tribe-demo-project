import { EmployeeListComponent } from "../dashboard/employee-list/employee-list.component";
import { DepartmentListComponent } from "../dashboard/department-list/department-list.component";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DepartmentEmployeeDelete{
    constructor(private employee: EmployeeListComponent, private department: DepartmentListComponent, private auth: AuthService , private router:Router){}

   if () {
       this.employee.employeeData
   }

}