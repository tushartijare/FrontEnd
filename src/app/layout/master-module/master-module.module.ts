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
];


@NgModule({
  declarations: [AddcityComponent, BranchDetailsComponent, EmployeeDetailsComponent, EnquireDetailsComponent, RoleDetailsComponent, TenureComponent, LoanDetailsComponent,EmiDetailsComponent,LoanDisbusmentComponent],
  imports: [
    TableModule,
    CommonModule, RouterModule.forChild(MasterRouting)
  ]
})
export class MasterModuleModule { }
