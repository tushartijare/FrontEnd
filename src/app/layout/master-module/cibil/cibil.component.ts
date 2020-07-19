import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/shared/common-service.service';
import { CibilStatusComponent } from '../../operational-execative/cibil-status/cibil-status.component';
import * as jsPdf  from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cibil',
  templateUrl: './cibil.component.html',
  styleUrls: ['./cibil.component.scss']
})
export class CibilComponent implements OnInit {

  constructor(private s:CommonServiceService) { }
  cibil:CibilStatusComponent[];

  ngOnInit(): void {
    
    this.s.getDataForCibil().subscribe((data:CibilStatusComponent[])=>{
      this.cibil=data;
    });
  }
  downloadPdf(){

    var element=document.getElementById("cibil")

    html2canvas(element).then((canvas)=>{

      var imgWidth=600;
      var pageHeight=500;
      

      var doc=new jsPdf()

      var imageheight=canvas.height * imgWidth / canvas.width;
      var heightLeft=imageheight;
      var imagedata=canvas.toDataURL('image/png')
      
      let pdf=new jsPdf('p','mm','a4');
      doc.addImage(imagedata,0,0,280,imageheight)
      doc.save("Cibil.pdf")
    })
}

}
