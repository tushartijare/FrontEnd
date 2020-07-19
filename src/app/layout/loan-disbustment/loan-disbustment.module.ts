import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EmiDetailsComponent } from './emi-details/emi-details.component';
import { LoanDisbusmentComponent } from './loan-disbusment/loan-disbusment.component';
import {TableModule} from 'primeng/table';
const LDrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {path: 'emiDetails',component:EmiDetailsComponent},
    {path: 'loanDisbusment',component:LoanDisbusmentComponent}
];

@NgModule({
    declarations: [DashboardComponent, EmiDetailsComponent, LoanDisbusmentComponent],
    imports: [TableModule,CommonModule, RouterModule.forChild(LDrouting)],

const LDrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, RouterModule.forChild(LDrouting)],

})
export class LoanDisbustmentModule {}
