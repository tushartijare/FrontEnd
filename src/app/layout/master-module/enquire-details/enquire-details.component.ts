import { Component, OnInit } from '@angular/core';
import { EnquireDetails } from 'src/app/model/EnquireDetails.model';
import * as jsPdf from 'jspdf';
import html2canvas from 'html2canvas';
import { EnquireDetailsService } from 'src/app/shared/services/enquire-details.service';
@Component({
  selector: 'app-enquire-details',
  templateUrl: './enquire-details.component.html',
  styleUrls: ['./enquire-details.component.scss']
})
export class EnquireDetailsComponent implements OnInit {

  constructor(private s:EnquireDetailsService) { }
enquire:EnquireDetails[];
  ngOnInit(): void {
    this.s.getdata().subscribe((data:EnquireDetails[])=>{
      this.enquire=data;
    });
  }
  downloadPdf(){

    var element=document.getElementById("enquire")

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
