import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.scss']
})
export class AddcityComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateTo(){

    this.router.navigateByUrl('role/admin/branchDetails');
  }
  navigateToEmployee(){
    this.router.navigateByUrl('role/admin/employeeDetails');

  }
  navigateToEnquire(){
    this.router.navigateByUrl('role/admin/enquireDetails');

  }
  navigateToLoanDetails(){
    this.router.navigateByUrl('role/admin/loanDetails');

  }
  navigateToroleDetails(){
    this.router.navigateByUrl('role/admin/roleDetails');

  }
  navigateToTenure(){
    this.router.navigateByUrl('role/admin/tenure');

  }
}
