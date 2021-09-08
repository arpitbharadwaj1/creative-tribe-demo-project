export class UserData {
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    dob: string = "";
    department: string = "";
    salary: number = 0;

    constructor(id: number, firstName: string, lastName: string, dob: string, department: string, salary: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.department = department;
        this.salary = salary;
    }
}