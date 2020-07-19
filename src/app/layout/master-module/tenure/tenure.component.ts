import { Component, OnInit } from '@angular/core';
import { Tenure } from 'src/app/model/Tenure.model';
import * as jsPdf from 'jspdf';
import html2canvas from 'html2canvas';
import { TenureService } from 'src/app/shared/services/tenure.service';
@Component({
  selector: 'app-tenure',
  templateUrl: './tenure.component.html',
  styleUrls: ['./tenure.component.scss']
})
export class TenureComponent implements OnInit {

  constructor(private s:TenureService) { }
tenure:Tenure[];
  ngOnInit(): void {
    this.s.getdata().subscribe((data:Tenure[])=>{
      this.tenure=data;
    });
  }
  downloadPdf(){

    var element=document.getElementById("tenure")

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
