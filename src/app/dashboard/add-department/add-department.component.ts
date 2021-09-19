import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alretify.service';
import { EmployeeModel } from 'src/app/model/employee.model';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  [x: string]: any;

  formvalue !: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  data: any
  constructor(
    private formbuilder: FormBuilder,
    private alertify: AlertifyService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.formvalue = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required]
    });
    this.checkingDepartment();
  }

  postDepartmentDetails() {
    this.employeeModelObj.firstName = this.formvalue.value.firstName;
    this.employeeModelObj.lastName = this.formvalue.value.lastName;
    //this.employeeModelObj.dob = this.formvalue.value.dob;
    this.employeeModelObj.department = this.formvalue.value.department;
   // this.employeeModelObj.salary = this.formvalue.value.salary;

    this.api.postDepartment(this.employeeModelObj).subscribe(
      data => {
        console.log(data);
        this.alertify.success('Department added successfully');
        //this.getAllEmployees();
      },
      err=>{
        console.log(err);
        this.alertify.error('something went wrong');
      }
    );
  }
  
  checkingDepartment(){
    //        this.data= JSON.stringify('http://localhost:3000/posts');
    this.data= JSON.stringify('http://localhost:3000/posts?id=8');
   // let help = JSON.parse(this.data);
    //console.log(help);
   // console.log(help.department)
  }
  
}



