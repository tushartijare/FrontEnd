import { Component, OnInit } from '@angular/core';
import { LoanDetails } from 'src/app/model/LoanDetails.model';
import * as jsPdf from 'jspdf';
import html2canvas from 'html2canvas';
import { LoandetailsService } from 'src/app/shared/services/loandetails.service';
@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  constructor(private s:LoandetailsService) { }
loandetails:LoanDetails[];
  ngOnInit(): void {
    this.s.getdata().subscribe((data:LoanDetails[])=>{
      this.loandetails=data;
    });
  }

  downloadPdf(){

    var element=document.getElementById("loan")

    html2canvas(element).then((canvas)=>{

      var imgWidth=190;
      var pageHeight=295;
     

      var doc=new jsPdf()

      var imageheight=canvas.height * imgWidth / canvas.width;
      var heightLeft=imageheight;
      var imagedata=canvas.toDataURL('image/png')
      
      let pdf=new jsPdf('p','mm','a4');
      doc.addImage(imagedata,0,0,190,imageheight)
      doc.save("image.pdf")
    })



    

  }

}
