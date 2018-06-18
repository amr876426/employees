import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {Employee } from '../../model/employee';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router , ActivatedRoute , Params } from '@angular/router';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id:string;
  employee:Employee;
  constructor(  public employeeService:EmployeeService,
    public router:Router,
    public activatedRoute:ActivatedRoute,
    public flashMessagesService:FlashMessagesService )
     { }

     ngOnInit() {
      this.id = this.activatedRoute.snapshot.params['id'];
      this.employeeService.getEmployee(this.id).subscribe(employee =>{ 
        this.employee = employee; 
      });
    }
  
   
    updateSalaryEmployee(id:string){
      this.employeeService.updateEmployee(this.id,this.employee);
      this.flashMessagesService.show("Salary Updated successfully ! :) ",{cssClass:'alert-success',timeout:6000});
      this.router.navigate(['/employes/'+this.id]);
    }
    myDelete(id:string){
      this.employeeService.deleteEmployee(this.id);
      this.flashMessagesService.show("This id delet successfully ! :) ",{cssClass:'alert-success',timeout:6000});
      this.router.navigate(['/employes/'+this.id]);
    }

}
