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
  navigateTobankdetails()
{
  this.router.navigateByUrl('role/admin/bankdetails');
}
  navigateTocibil()
{
  this.router.navigateByUrl('role/admin/cibil');
}
navigateTocustomeraddress()
{
  this.router.navigateByUrl('role/admin/customeraddress');
}
navigateTocustomeraddressdetails()
{
  this.router.navigateByUrl('role/admin/customeraddressdetails');
}
navigateTocustomerbankdetails()
{
  this.router.navigateByUrl('role/admin/customerbankdetails')
}
navigateTocustomerdetails()
{ 
  this.router.navigateByUrl('role/admin/customerdetails')
}
navigateTodealerbankdetails()
{
  this.router.navigateByUrl('role/admin/dealerbankdetails')
}
navigateTodealerdetails()
{
  this.router.navigateByUrl('role/admin/dealerdetails')
}
navigateTodocumentsdetails()
{
  this.router.navigateByUrl('role/admin/documentdetails')
}
navigateToemidetails()
{
  this.router.navigateByUrl('role/admin/emidetails')
}
navigateTogaurantordetails()
{
  this.router.navigateByUrl('role/admin/gaurantordetails')
}
navigateToledgerdetails()
{
  this.router.navigateByUrl('role/admin/ledgerdetails')
}
navigateToperviousloandetails()
{
  this.router.navigateByUrl('role/admin/perviousloandetails')
}
navigateTovehicledetails()
{
  this.router.navigateByUrl('role/admin/vehicledetails')
}
}
