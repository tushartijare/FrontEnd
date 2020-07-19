import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/shared/common-service.service';
import * as jsPdf  from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-documentdetails',
  templateUrl: './documentdetails.component.html',
  styleUrls: ['./documentdetails.component.scss']
})
export class DocumentdetailsComponent implements OnInit {

  constructor(private s:CommonServiceService) { }
  documentdetails:DocumentdetailsComponent[];
  ngOnInit(): void {
    this.s.getDataForDocumentDetails().subscribe((data:DocumentdetailsComponent[])=>{
           this.documentdetails=data;
    })
  }
  downloadPdf(){

    var element=document.getElementById("documentdetails")

    html2canvas(element).then((canvas)=>{

      var imgWidth=150;

      var pageHeight=200;
     

      var doc=new jsPdf()

      var imageheight=canvas.height * imgWidth / canvas.width;
      var heightLeft=imageheight;
      var imagedata=canvas.toDataURL('image/png')
      
      let pdf=new jsPdf('p','mm','a4');
      doc.addImage(imagedata,0,0,280,imageheight)
      doc.save("DocumentDetails.pdf")
    })

}
}
