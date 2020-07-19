import { CustomerAddressDetails } from "./CustomerAddressDetails.model";
import { GuarantorDetails } from "./GaurantorDetails.model";

export class CustomerDetails
{
     customer_id:number;
	 cname:string;
	 customer_mob:string;
     cutomer_emailid:string;
	 customer_gender:string;
	 customer_age:number;
	 customer_qualification:string;
	 customer_income_details:number;
	 customer_occupation_type:string;
	 loan_no:number;
     marital_status:string;
	 cutomer_status_code:number;
	
	 customer_address_details:CustomerAddressDetails;
	
	 gaurantor_details:GuarantorDetails  ;
	
	
}