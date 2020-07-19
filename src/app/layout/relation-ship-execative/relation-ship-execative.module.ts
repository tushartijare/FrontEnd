import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CibilstatusComponent } from './cibilstatus/cibilstatus.component';

import { LedgerCreationComponent } from './ledger/ledger-creation/ledger-creation.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';


import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { EmidetailsComponent } from './emidetails/emidetails.component';


const RSrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cibil', component: CibilstatusComponent },

    { path: 'ledger', component:LedgerCreationComponent } ,
];

@NgModule({
    declarations: [DashboardComponent, CibilstatusComponent, LedgerCreationComponent, ],

    { path: 'emidetails', component: EmidetailsComponent }
];

@NgModule({
    declarations: [DashboardComponent, CibilstatusComponent,  EmidetailsComponent],

    imports: [CommonModule, RouterModule.forChild(RSrouting)],
})
export class RelationShipExecativeModule {}
