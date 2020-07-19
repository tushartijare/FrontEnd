import { Component, OnInit } from '@angular/core';
import { PreviousLoanDetailsComponent } from '../../operational-execative/previous-loan-details/previous-loan-details.component';
import { CommonServiceService } from 'src/app/shared/common-service.service';
import * as jsPdf  from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-pervious-loan-details',
  templateUrl: './pervious-loan-details.component.html',
  styleUrls: ['./pervious-loan-details.component.scss']
})
export class PerviousLoanDetailsComponent implements OnInit {

  constructor(private s:CommonServiceService) { }
  previousloandetails:PreviousLoanDetailsComponent[];
  ngOnInit(): void {
    this.s.getDataForPreviousLoanDeatils().subscribe((data:PreviousLoanDetailsComponent[])=>{
      this.previousloandetails=data;
    });
  }
  downloadPdf(){

    var element=document.getElementById("previousloandetails")

    html2canvas(element).then((canvas)=>{

      var imgWidth=150;
      var pageHeight=200;
     

      var doc=new jsPdf()

      var imageheight=canvas.height * imgWidth / canvas.width;
      var heightLeft=imageheight;
      var imagedata=canvas.toDataURL('image/png')
      
      let pdf=new jsPdf('p','mm','a4');
      doc.addImage(imagedata,0,0,280,imageheight)
      doc.save("perviousLaonDetails.pdf")
    })

}

}
