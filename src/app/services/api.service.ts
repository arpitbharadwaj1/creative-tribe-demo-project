import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators"
@Injectable({
    providedIn: 'root'
})
export class ApiService{
    constructor(private http: HttpClient){}

    private urlComments = 'http://localhost:3000/comments';
    private urlPosts = 'http://localhost:3000/posts';
    
    postEmployee(data: any){
        return this.http.post('http://localhost:3000/posts',data)
            .pipe(map((res:any)=>{
            return res;
        }));
    }

    postDepartment(data: any){
        return this.http.post('http://localhost:3000/comments',data)
            .pipe(map((res:any)=>{
            return res;
        }));
    }

    getEmployee(){
        return this.http.get<any>('http://localhost:3000/posts')
            .pipe(map((res:any)=>{
                return res;
            }));
    }

    getDepartment(){
        return this.http.get<any>('http://localhost:3000/comments')
            .pipe(map((res:any)=>{
                return res;
            }));
    }

    updateEmployee(data: any, id: number){
        return this.http.put('http://localhost:3000/posts/'+id,data)
            .pipe(map((res:any)=>{
                return res;
            }));
    }

    deleteEmployee(id: number){
        return this.http.delete('http://localhost:3000/posts/'+id)
            .pipe(map((res:any)=>{
                return res;
            }));
    }

    deleteDepartment(id: number){
        return this.http.delete('http://localhost:3000/comments/'+id)
            .pipe(map((res:any)=>{
                return res;
            }));
    }

    getUserByUsername(uDept:string){
        return this.http.get<any[]>(this.urlComments,{
            params: new HttpParams().set('department', uDept)
        })
    } 

    getDepartmentByDepartment(dept:string){
        return this.http.get<any[]>(this.urlComments,{
            params: new HttpParams().set('department',dept)
        })
    }

    getEmployeeByDepartment(emp:string){
        return this.http.get<any[]>(this.urlPosts,{
            params: new HttpParams().set('department',emp)
        })
    }
}