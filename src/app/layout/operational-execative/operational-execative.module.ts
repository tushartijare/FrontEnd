import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

import { CibilStatusComponent } from './cibil-status/cibil-status.component';
const OErouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {path: 'cibil', component: CibilStatusComponent}
];

@NgModule({
    declarations: [DashboardComponent,  CibilStatusComponent],

import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { CibilStatusComponent } from './cibil-status/cibil-status.component';


import { PreviousLoanDetailsComponent } from './previous-loan-details/previous-loan-details.component';
import { DoucmentDetailsComponent } from './document-details/doucment-details.component';
const OErouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {path: 'cibil', component: CibilStatusComponent},
    {path:'previousLoanDetails',component:PreviousLoanDetailsComponent },
    {path:'documentDetails', component:DoucmentDetailsComponent}
    
];

@NgModule({
    declarations: [DashboardComponent,  CibilStatusComponent, PreviousLoanDetailsComponent, DoucmentDetailsComponent],

    imports: [CommonModule, RouterModule.forChild(OErouting)],
})
export class OperationalExecativeModule {}
