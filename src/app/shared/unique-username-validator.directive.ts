import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';


export function UniqueUsernameValidator(api:ApiService): AsyncValidatorFn{
  return (c:AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>{
    return api.getUserByUsername(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniqueDepartment' : true} : null;
      })
    );
  };
}

export function UniqueDepartmentValidator(api:ApiService): AsyncValidatorFn{
  return (c:AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>{
    return api.getDepartmentByDepartment(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniqueDepartmentByDepartment' : true} : null;
      })
    );
  };
}

export function UniqueEmployeeDepartmentValidator(api:ApiService): AsyncValidatorFn{
  return (c:AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>{
    return api.getEmployeeByDepartment(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniqueDepartmentByEmployee' : true} : null;
      })
    );
  };
}

 
@Directive({ 
  selector: '[uniqueUsername]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameValidatorDirective, multi: true }]
})
export class UniqueUsernameValidatorDirective implements AsyncValidator {

  constructor(private api: ApiService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.api.getUserByUsername(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniqueDepartment' : true} : null;
      })
    )
  }

}
