import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BranchDetails } from 'src/app/model/BranchDetails.model';

@Injectable({
  providedIn: 'root'
})
export class BranchDetailsService {

  url:string="http://localhost:8087";
  constructor(private http:HttpClient) { }

  branchDetails:BranchDetails={

  branchId:0,
	  branchName:null,
	branchType:null,
	  branchIFSC_Code:null,
	  branchMICR_Code:null,
	  branchContactNo:null,
	  branchEmailId:null,
      branchAddress:null





  }
  getdata()
{

return this.http.get(this.url+"/branchDetails");

}
}
