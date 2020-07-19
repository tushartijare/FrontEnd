import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/shared/common-service.service';
import * as jsPdf  from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-dealer-bank-details',
  templateUrl: './dealer-bank-details.component.html',
  styleUrls: ['./dealer-bank-details.component.scss']
})
export class DealerBankDetailsComponent implements OnInit {

  constructor(private s:CommonServiceService) { }
  dealerbankdetails:DealerBankDetailsComponent[];


  ngOnInit(): void {
    this.s.getDataForDealerBankDetails().subscribe((data:DealerBankDetailsComponent[])=>{
      this.dealerbankdetails=data;
    });
  }
  downloadPdf(){

    var element=document.getElementById("dealerbankdetails")

    html2canvas(element).then((canvas)=>{

      var imgWidth=150;
      var pageHeight=200;
     

      var doc=new jsPdf()

      var imageheight=canvas.height * imgWidth / canvas.width;
      var heightLeft=imageheight;
      var imagedata=canvas.toDataURL('image/png')
      
      let pdf=new jsPdf('p','mm','a4');
      doc.addImage(imagedata,0,0,280,imageheight)
      doc.save("DealerBankDetails.pdf")
    })

}


}
