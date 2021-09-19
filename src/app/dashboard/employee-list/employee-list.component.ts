import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alretify.service';
import { ApiService } from 'src/app/services/api.service';
import { UserData } from 'src/app/model/Users';
import { EmployeeModel } from 'src/app/model/employee.model';
//import { EmployeeListPipe } from 'src/app/pipes/employeeList.pipe';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //employeeData: any;
  searchValue!: string;
  firstNamee: any;
  employeeData!: EmployeeModel[];
  p:number = 1;

  rows: number = 3
  hello: any;
  pageSize: any;

  constructor(private api: ApiService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.api.getEmployee().subscribe(res => {
      this.employeeData = res;
    })
  }
  deleteEmployee(row: any) {
    this.api.deleteEmployee(row.id).subscribe(res => {
      this.alertify.success("Employee deleted successfully");
      this.getAllEmployees();
    });
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;
  }
  chooseValue(event:any){
    this.hello = event.target.value
    //  console.log(this.hello)
     this.pageSize=this.hello
 } 
}
