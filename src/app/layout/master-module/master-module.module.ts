
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcityComponent } from './addcity/addcity.component';
import { Routes, RouterModule } from '@angular/router';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import {TableModule} from 'primeng/table';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EnquireDetailsComponent } from './enquire-details/enquire-details.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { TenureComponent } from './tenure/tenure.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { EmiDetailsComponent } from './emi-details/emi-details.component';
import { LoanDisbusmentComponent } from './loan-disbusment/loan-disbusment.component';

const MasterRouting: Routes = [
  {path: 'add', component:AddcityComponent},
  {path: 'branchDetails', component:BranchDetailsComponent},
  {path: 'employeeDetails', component:EmployeeDetailsComponent},
  {path: 'enquireDetails', component:EnquireDetailsComponent},
  {path: 'loanDetails', component:LoanDetailsComponent},
  {path: 'roleDetails', component:RoleDetailsComponent},
  {path: 'tenure', component:TenureComponent}

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcityComponent } from './addcity/addcity.component';
import { Routes, RouterModule } from '@angular/router';
import { CibilComponent } from './cibil/cibil.component';


import { EmiDetailsComponent } from './emi-details/emi-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { DealerBankDetailsComponent } from './dealer-bank-details/dealer-bank-details.component';
import { DealerDetailsComponent } from './dealer-details/dealer-details.component';
import { GaurantorDeatilsComponent } from './gaurantor-deatils/gaurantor-deatils.component';
import { PerviousLoanDetailsComponent } from './pervious-loan-details/pervious-loan-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CustomerBankDetailsComponent } from './customer-bank-details/customer-bank-details.component';
import { LedgerDetailsComponent } from './ledger-details/ledger-details.component';
import { CustomerAddressDetailsComponent } from './customer-address-details/customer-address-details.component';



//  import { DoucmentDetailsComponent } from '../operational-execative/document-details/doucment-details.component';
import { DocumentdetailsComponent } from './documentdetails/documentdetails.component';




const MasterRouting: Routes = [
  {path: 'add', component: AddcityComponent},
  {path:'cibil', component:CibilComponent},
  {path:'customerdetails',component:CustomerDetailsComponent},
  {path:'bankdetails',component:BankDetailsComponent},
  {path:'customeraddress',component:CustomerAddressComponent},
  {path:'customeraddressdetails',component:CustomerAddressDetailsComponent},
  {path:'customerbankdetails',component:CustomerBankDetailsComponent},
  {path:'dealerbankdetails',component:DealerBankDetailsComponent},
  {path:'customerdetails',component:CustomerDetailsComponent},
  {path:'dealerdetails',component:DealerDetailsComponent},
  {path:'documentdetails',component:DocumentdetailsComponent},
  {path:'emidetails',component:EmiDetailsComponent},
  {path:'gaurantordetails',component:GaurantorDeatilsComponent},
  {path:'ledgerdetails',component:LedgerDetailsComponent},
  {path:'perviousloandetails',component:PerviousLoanDetailsComponent},
  {path:'vehicledetails',component:VehicleDetailsComponent}

];


@NgModule({

  declarations: [AddcityComponent, BranchDetailsComponent, EmployeeDetailsComponent, EnquireDetailsComponent, RoleDetailsComponent, TenureComponent, LoanDetailsComponent,EmiDetailsComponent,LoanDisbusmentComponent],
  imports: [
    TableModule,

  declarations: [AddcityComponent, CibilComponent, CustomerDetailsComponent, EmiDetailsComponent,BankDetailsComponent , CustomerAddressComponent, CustomerDetailsComponent, DealerBankDetailsComponent, DealerDetailsComponent, GaurantorDeatilsComponent, PerviousLoanDetailsComponent, VehicleDetailsComponent, CustomerBankDetailsComponent, LedgerDetailsComponent, CustomerAddressDetailsComponent, DocumentdetailsComponent],
  imports: [

    CommonModule, RouterModule.forChild(MasterRouting)
  ]
})
export class MasterModuleModule { }
