import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from 'src/app/model/EmployeeDetails.model';
import * as jsPdf from 'jspdf';
import html2canvas from 'html2canvas';
import { EmployeeDetailsService } from 'src/app/shared/services/employee-details.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private s:EmployeeDetailsService) { }
employeeDetails:EmployeeDetails[];
  ngOnInit(): void {
  
    this.s.getdata().subscribe((data:EmployeeDetails[])=>{
      this.employeeDetails=data;
    });
  }

  downloadPdf(){

    var element=document.getElementById("employee")

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
