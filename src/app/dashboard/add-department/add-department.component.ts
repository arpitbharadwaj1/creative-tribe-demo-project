import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alretify.service';
import { EmployeeModel } from 'src/app/model/employee.model';
import { ApiService } from 'src/app/services/api.service';
import { UniqueUsernameValidator } from 'src/app/shared/unique-username-validator.directive';
//import {db.json} from '';
 import  *  as  db  from  'src/db.json';
import { filter, map } from 'rxjs/operators';

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
  userSubmitted!: boolean
  hello = false
  i: any
  department1 =  ''
  constructor(
    private formbuilder: FormBuilder,
    private alertify: AlertifyService,
    private api: ApiService
  ) { }

  ngOnInit() {
    // this.formvalue = this.formbuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   dob: ['', Validators.required],
    //   department: ['',null, UniqueUsernameValidator(this.api)],
    //   salary: ['', Validators.required]
    // });
    this.checkingDepartment();
    this.addDepartmentValidator();
  }

  addDepartmentValidator() {
    this.formvalue = this.formbuilder.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // dob: ['', Validators.required],
      department: ['',
        null,
        UniqueUsernameValidator(this.api)],
      // salary: ['', Validators.required]
    });
  }

  postDepartmentDetails() {
    // this.employeeModelObj.firstName = this.formvalue.value.firstName;
    //this.employeeModelObj.lastName = this.formvalue.value.lastName;
    this.employeeModelObj.department = this.formvalue.value.department;

    this.api.postDepartment(this.employeeModelObj).subscribe(
      data => {
        //console.log(data);
        this.alertify.success('Department added successfully');
        this.getAllEmployees();
      },
      err => {
        console.log(err);
        this.alertify.error('something went wrong');
      }
    );
  }

  checkingDepartment(){
  // fetch(db.json).then (response => db.json()).then(data=>{
  //   console.log(data.)
  // })

  // this.data= ('http://localhost:3000/posts.department');
  // console.log(this.data);
  //const x = this.data.posts.department;
  //this.data= JSON.stringify('http://localhost:3000/posts?id=8');
  //let help = JSON.parse(this.data);
  //console.log(this.x);
  //console.log(help.department)
  
  const hello = 
  this.api.getEmployee().pipe(
    //map( result => result.filter( r => r.department == this.department))
  )
  .subscribe(res=>{
    this.department1 = res.map( (x: { department: any; }) => x.department)
    console.log(res)
    console.log(this.department1)
    // const result = res.map((item: any)=>{
    //   console.log(item)
    //   this.department1.push(item.department)
    //   console.log(this.department1)
    // })
  })
  // for (let i=0; i<hello.length; i++){
    // console.log(hello[i])
    
//   document.writeln(
//     hello.department + "<br/>"
// );

//  }
  // console.log(this.hello);
  }

  get department() {
    return this.formvalue.get('department');
  }

}



