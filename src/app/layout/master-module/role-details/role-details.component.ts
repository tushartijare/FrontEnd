import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/model/Role.model';
import * as jsPdf from 'jspdf';
import html2canvas from 'html2canvas';
import { RoleDetailsService } from 'src/app/shared/services/role-details.service';
@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.scss']
})
export class RoleDetailsComponent implements OnInit {

  constructor(private s:RoleDetailsService) { }
  roleDetails:Role[];
  ngOnInit(): void {
    this.s.getdata().subscribe((data:Role[])=>{
      this.roleDetails=data;
    });
  }
  downloadPdf(){

    var element=document.getElementById("role")

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
