import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/shared/common-service.service';
import { EmiPaymentDetails } from 'src/app/model/EmiPaymentDetails.model';
import * as jsPdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-emi-details',
  templateUrl: './emi-details.component.html',
  styleUrls: ['./emi-details.component.scss']
})
export class EmiDetailsComponent implements OnInit {


  constructor(private s:CommonServiceService,private router:Router) { }
leda:EmiPaymentDetails[];
  ngOnInit(): void {
    
    this.getDataMethod();


  }

   getDataMethod(){
     this.s.getdata().subscribe((data:EmiPaymentDetails[])=>{
       this.leda=data;
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
  


