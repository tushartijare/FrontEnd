import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  url:string="http://localhost:8087";
  constructor(private http:HttpClient) { }
  getdata()
{

return this.http.get(this.url+"/employeeDetails");

}
}
