import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CibilstatusComponent } from './cibilstatus/cibilstatus.component';

import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { EmidetailsComponent } from './emidetails/emidetails.component';

const RSrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cibil', component: CibilstatusComponent },
    { path: 'emidetails', component: EmidetailsComponent }
];

@NgModule({
    declarations: [DashboardComponent, CibilstatusComponent,  EmidetailsComponent],
    imports: [CommonModule, RouterModule.forChild(RSrouting)],
})
export class RelationShipExecativeModule {}
