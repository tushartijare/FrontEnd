import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  EmiPaymentDetails } from '../model/EmiPaymentDetails.model';
import {  LoanDisbusment } from '../model/LoanDisbusment.model';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  url:string="http://localhost:8087";
  constructor(private http:HttpClient) { }
leda:EmiPaymentDetails=
{
  emiAmount:0,
  emiLastDate:null,
  emiPaidAmount:0,
  emiPaidDate:null,
  emiPaymentId:0,
  loanNo:0,
  totalAmount:0



}
loanDisbusment:LoanDisbusment={

  loanDisbursementId:0,
  loanDisbursementMasterId:0,
  loanNo:0,
  emi:0,
  loanAmount:0,
  tenure:0,
  statusCode:0
}
getdata()
{

return this.http.get(this.url+"/EmiPaymentDetails");

}

getDataForLoanDisbusment(){

  return this.http.get(this.url+"/Loandisbusment"); 
}



}
