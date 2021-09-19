import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alretify.service';
import { ApiService } from 'src/app/services/api.service';
import { EmployeeModel } from 'src/app/model/employee.model';
import { DepartmentModel } from 'src/app/model/department.model';
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';  
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  searchValue!: string;
  firstNamee: any;
  departmentData!: DepartmentModel[];
  p: number = 1;
  pageSize!:number
  hello!:number
  constructor(private api: ApiService,
    private alertify: AlertifyService) {}

  ngOnInit() {
    this.getAllDepartment();
    this.myDepartment(); 
  }

  getAllDepartment() {
    this.api.getDepartment().subscribe(res => {
      this.departmentData = res;
    })
  }

  deleteDepartment(row: any) {
    this.api.deleteDepartment(row.id).subscribe(res => {
      this.alertify.success("Department deleted successfully");
      this.getAllDepartment();
    });
  }
  key: string = 'id';
  reverse: boolean = false;
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;
  }

  myDepartment(){
    let dept = 'http://localhost:3000/comments';
    console.log(dept)
  }

  chooseValue(event:any){
     this.hello = event.target.value
      // console.log(this.hello)
      this.pageSize=this.hello
  } 
}
