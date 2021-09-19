import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeModel } from '../model/employee.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(employee: EmployeeModel[], searchValue: string): EmployeeModel[] {

    if (!employee || !searchValue) {
      return employee;
    }
    return employee.filter(student => 
      student.department.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
     // student.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    ); 
  }
}
