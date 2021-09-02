import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alretify.service';
import { EmployeeModel } from 'src/app/model/employee.model';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  [x: string]: any;

  formvalue !: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  constructor(
    private formbuilder: FormBuilder,
    private alertify: AlertifyService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.formvalue = this.formbuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      dob: [null, Validators.required],
      department: [null, Validators.required],
      salary: [null, Validators.required]
    });
  }

  postEmployeeDetails() {
    this.employeeModelObj.firstName = this.formvalue.value.firstName;
    this.employeeModelObj.lastName = this.formvalue.value.lastName;
    this.employeeModelObj.dob = this.formvalue.value.dob;
    this.employeeModelObj.department = this.formvalue.value.department;
    this.employeeModelObj.salary = this.formvalue.value.salary;

    this.api.postEmployee(this.employeeModelObj).subscribe(
      data => {
        console.log(data);
        this.alertify.success('Employee added successfully');
        this.getAllEmployees();
      },
      err=>{
        console.log(err);
        this.alertify.error('something went wrong');
      }
    );
  }
  // get firstName(){
  //   return this.registerationForm.get('firstName') as FormControl;
  // }
  // get lastName(){
  //   return this.registerationForm.get('lastName') as FormControl;
  // }
  // get email(){
  //   return this.registerationForm.get('email') as FormControl;
  // }
  // get password(){
  //   return this.registerationForm.get('password') as FormControl;
  // } 
  // get confirmPassword(){
  //   return this.registerationForm.get('confirmPassword') as FormControl;
  // }
}


