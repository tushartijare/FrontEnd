import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/shared/common-service.service';
import { LoanDisbusment } from 'src/app/model/LoanDisbusment.model';
import * as jsPdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-loan-disbusment',
  templateUrl: './loan-disbusment.component.html',
  styleUrls: ['./loan-disbusment.component.scss']
})
export class LoanDisbusmentComponent implements OnInit {

  constructor(private s:CommonServiceService) { }

  loanDisbusment:LoanDisbusment[];

  ngOnInit(): void {
    this.s.getDataForLoanDisbusment().subscribe((data:LoanDisbusment[])=>{
      this.loanDisbusment=data;
    }

    );
  }

  downloadPdf(){

    var element=document.getElementById("emi")

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
