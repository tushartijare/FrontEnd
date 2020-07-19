import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  EmiPaymentDetails } from '../model/EmiPaymentDetails.model';
import {  LoanDisbusment } from '../model/LoanDisbusment.model';

import { Ledger } from '../model/ledger.model';
import {PreviousLoanDetails } from '../model/PreviousLoanDetails.model'
import { DocumentDetails } from '../model/DocumentDetails.model';
import { Cibil } from '../model/Cibil.model';
import { BankDetails } from '../model/BankDetails.model';
import { CustomerAddress } from '../model/CustomerAddress.model';
import { CustomerAddressDetails } from '../model/CustomerAddressDetails.model';
import { CustomerBankDetails } from '../model/CustomerBankDetails.model';
import { CustomerDetails } from '../model/CustomerDetails.model';
import { GuarantorDetails } from '../model/GaurantorDetails.model';
import { DealerBankDetails } from '../model/DealerBankDetails.model';
import { DealerDetails } from '../model/DealerDetails.model';
import { EmiDetails } from '../model/EmiDetails.model';
import { VehicleDetails } from '../model/Vehicle.Detailsmodel';



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




ledgerdetails:Ledger=
{
  month:0,
  balance_due:0,
  emi_ammount:0,
  intrest_amount:0,
  principle_dedcution:0

}

previousloandetails:PreviousLoanDetails=
{
  id:0,
  remainingEmi:0,
  remainingAmount:0

}

documentdetails:DocumentDetails=
{
  documentId:0,
  customerId:null,
  addressProof:null,
  bankStatement:null,
  itrFile:null,
  photo:null,
  postDatedCheck:null,
  signature:null,
  thumb:null,
  bankcheck:null,
  salarySlip:null,
  adharcard:null,
  pancard:null,
  previousLoanStatement:null
}

cibil:Cibil=
{ 
cibilId:0,
leadId:0,
cibilScore:0,
cibilScoreDateTime:null,
status:0,
remark:null,

}
bankdetails:BankDetails=
{
  bid:0,
  bankAccountNo:'',
    bankAccountHolderName:'',
    status:0
 
}
customeraddress:CustomerAddress=
{
  cust_addrID:0,
  local_houseNo:'',
  local_streetName:'',
  local_area:'',
  local_landMark:'',
  local_taluka:'',
  local_city:'',
  local_district:'',
  local_state:'',
  local_country:'',
  local_pincode:'',
 
  permanent_houseNo:'',
  permanent_streetName:'',
  permanent_area:'',
  permanent_landMark:'',
  permanent_taluka:'',
  permanent_city:'',
  permanent_district:'',
  permanent_state:'',
  permanent_country:'',
  permanent_pincode:0,
 
  verification_status:''
}
customeraddressDetails:CustomerAddressDetails=
{
   addressId:0,
	 houseNo:'',
	 streetName:'',
	 area:'',
	 landMark:'',
	 taluka:'',
	 city:'',
	 district:'',
	 state:'',
	 country:'',
	 pincode:'',
	 Permenemt_houseNo:'',
	 Permenemt_streetName:'',
	 Permenemt_area:'',
	 Permenemt_landMark:'',
	 Permenemt_taluka:'',
	 Permenemt_city:'',
	 Permenemt_district:'',
	 Permenemt_state:'',
	 Permenemt_country:'',
	 Permenemt_pincode:'',
	 staus:0
}
customerbankdetails:CustomerBankDetails=
{
  id:0,
  customerBankAccountNo:'',
  customerBankAccountHolderName:''
}
gaurantordetails:GuarantorDetails=
{
  guarantor_id:0,
  guarantor_Name:'',
      guarantor_DOB:'',
  guarantor_RelationshipWithConsumer:'',
      guarantor_Nobileno:'',
  guarantor_Adharcardno:'',
      guarantor_MortageDetails:'',
  guarantor_JobDetails:'',
  guarantor_LocalAddress:'',
      guarantor_PermanentAddress:''
}
customerdetails:CustomerDetails=
{
  customer_id:0,
  cname:'',
  customer_mob:'',
    cutomer_emailid:'',
  customer_gender:'',
  customer_age:0,
  customer_qualification:'',
  customer_income_details:0,
  customer_occupation_type:'',
  loan_no:0,
    marital_status:'',
  cutomer_status_code:0,
 
  customer_address_details:this.customeraddressDetails,
 
  gaurantor_details:this.gaurantordetails  
}
dealerbankdetails:DealerBankDetails=
{
  dealer_bId:0,
	 dealer_Name:'',
	 dealer_AdharNo:'',
	 dealer_AccountNo:'',
	 dealer_BankName:'',
	 dealer_BankIfscCode:'',
	 dealer_BankAddress:''
}
dealerdetails:DealerDetails=
{
   dealer_Id:0,
	 dealer_Name:'',
	 dealer_DoB:'',
   dealer_EmailId:'',
	 dealer_MobNo:'',
	 dealer_AdharCardNo:'',
	 dealer_LocalAddress:'',
   dealer_PermanentAddress:'',
   dealer_bankdetails:this.dealerbankdetails
	
}
emidetails:EmiDetails=
{
  emiPaymentId:0,
  loanNo:0,	
emiAmount:0,	
  emiLastDate	:'',	
emiPaidAmount:0,	
totalAmount	:0
}
vehicledetails:VehicleDetails=
{
  id:0,
  vehicleRegistrationNo:'',
  vehicleEngineNo:'',
  vehicleChassisNo:'',
  vehicleType:'',
  vehicleCompany:'',
  vehicleModel:'',
  vehicleModelNo:'',
  vehicleColor:'',
  actualPrice:0,
    fuelType:'',

}
getDataForLedgerDetails()
{
return this.http.get(this.url+"");
}
getDataForPreviousLoanDeatils()
{
  return this.http.get(this.url+"/previousLoanDeatils");
}
getDataForDocumentDetails()
{
  return this.http.get(this.url+"documentDetails");
}
getDataForCibil()
{

  return this.http.get(this.url+"/cibilDetails");
}
getDataForBankDetails()
{
  return this.http.get(this.url+"");
}
getDataForCustomerAddress()
{
  return this.http.get(this.url+"");
}
getDataForCustomerAddressDetails()
{
  return this.http.get(this.url+"");
}
getDataForCustomerBankDetails()
{
  return this.http.get(this.url+"");
}
getDataForGaurantor()
{
  return this.http.get(this.url+"");
}

getDataForCustomerDetails()
{
  return this.http.get(this.url+"");
}
getDataForDealerBankDetails()
{
  return this.http.get(this.url+"");
}
getDataForDealerDetails()
{
  return this.http.get(this.url+"");
}
getDataForEmiDetails()
{
  return this.http.get(this.url+"");
}
getDataForVechileDetails()
{
  return this.http.get(this.url+"");
}

}
