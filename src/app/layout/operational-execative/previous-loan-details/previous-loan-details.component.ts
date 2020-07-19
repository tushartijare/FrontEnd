import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/shared/common-service.service';
import * as jsPdf  from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-previous-loan-details',
  templateUrl: './previous-loan-details.component.html',
  styleUrls: ['./previous-loan-details.component.scss']
})
export class PreviousLoanDetailsComponent implements OnInit {

  constructor(private s:CommonServiceService) { }
  
  previousLoanDeatils:PreviousLoanDetailsComponent[];
  ngOnInit(): void {

    this.s.getDataForPreviousLoanDeatils().subscribe((data:PreviousLoanDetailsComponent[])=>{
      this.previousLoanDeatils=data;
    });
  }
  downloadPdf(){

    var element=document.getElementById("previous-loan-details")

    html2canvas(element).then((canvas)=>{

      var imgWidth=150;
      var pageHeight=200;
     

      var doc=new jsPdf()

      var imageheight=canvas.height * imgWidth / canvas.width;
      var heightLeft=imageheight;
      var imagedata=canvas.toDataURL('image/png')
      
      let pdf=new jsPdf('p','mm','a4');
      doc.addImage(imagedata,0,0,280,imageheight)
      doc.save("image.pdf")
    })

}

}
