import { Component, OnInit } from '@angular/core';
import { BranchDetails } from 'src/app/model/BranchDetails.model';
import { BranchAddressDetails } from 'src/app/model/BranchAddressDetails.model';
import * as jsPdf from 'jspdf';
import html2canvas from 'html2canvas';
import { BranchDetailsService } from 'src/app/shared/services/branch-details.service';
@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.scss']
})
export class BranchDetailsComponent implements OnInit {

  constructor(private s:BranchDetailsService) { }
branchDetails:BranchDetails[]=
[{
branchId:1,
branchName:"Dena Bhosari Bank",
branchContactNo:"02027123851",
branchEmailId:"denahaitole#gmail.com",
branchIFSC_Code:"DD00013",
branchMICR_Code:"MA02315",
branchType:"Kay Mahiti",
branchAddress:{
branchAddressId:1,
branchArea:"Bhosari",
branchBuildingNo:"B 42",
branchCity:"Pune",
branchCountry:"India",
branchDistrict:"Pune",
branchLandMark:"Near Honda Showroom",
branchPinCode:411039,
branchState:"Maharashtra",
branchStreetName:"Alandi Road",
branchTaluka:"Haveli"
}


},
{
  branchId:2,
branchName:"Dena Bhosari Bank-2",
branchContactNo:"020271238552",
branchEmailId:"denahai#gmail.com",
branchIFSC_Code:"DD00014",
branchMICR_Code:"MA02316",
branchType:"unknown",
branchAddress:{
branchAddressId:2,
branchArea:"Dighi",
branchBuildingNo:"B/43",
branchCity:"Pune",
branchCountry:"India",
branchDistrict:"Pune",
branchLandMark:"Near Honda Service Showroom",
branchPinCode:411015,
branchState:"Maharashtra",
branchStreetName:"Dighi Road",
branchTaluka:"Haveli"
}

}] 
  ngOnInit(): void {

    this.s.getdata().subscribe((data:BranchDetails[])=>{
      this.branchDetails=data;
    });
  }


  downloadPdf(){

    var element=document.getElementById("branch")

    html2canvas(element).then((canvas)=>{

      var imgWidth=190;
      var pageHeight=400;
     

      var doc=new jsPdf()

      var imageheight=canvas.height * imgWidth / canvas.width;
      var heightLeft=imageheight;
      var imagedata=canvas.toDataURL('image/png')
      
      let pdf=new jsPdf('l','mm','a3');
      doc.addImage(imagedata,0,0,190,imageheight)
      doc.save("image.pdf")
    })



    

  } 
}
