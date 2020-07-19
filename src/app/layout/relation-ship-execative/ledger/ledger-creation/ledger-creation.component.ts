import { Component, OnInit } from '@angular/core';
import { EmiPaymentDetails } from 'src/app/model/EmiPaymentDetails.model';
import { CommonServiceService } from 'src/app/shared/common-service.service';
import * as jsPdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ledger-creation',
  templateUrl: './ledger-creation.component.html',
  styleUrls: ['./ledger-creation.component.scss']
})
export class LedgerCreationComponent implements OnInit {

  
  
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




