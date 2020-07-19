import { EmployeeAddressDetails } from "./EmployeeAddressDetails.model";
import { EmployeeDocumentDetails } from "./EmployeeDocumentDetails.model";
import { Role } from "./Role.model";

export class EmployeeDetails{

    employeeId:number;
	employeeFullName:string;
	employeeAddress:EmployeeAddressDetails;
    employeeMobileNo:string;
	employeeAlternateMobileNo:string;
	employeeEmail:string;
	employeeGender:string;
	employeeRole:Role;
	employeeBranch:string;
	employeeDateOfBirth:string;
	employeeDocument:EmployeeDocumentDetails;


}