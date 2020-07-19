import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoandetailsService {

  url:string="http://localhost:8087";
  constructor(private http:HttpClient) { }
  getdata()
{

return this.http.get(this.url+"/loanDetails");

}
}