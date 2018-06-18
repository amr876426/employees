import { element } from 'protractor';
import { Employee } from './../../model/employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

employees: Employee[];

totalEmplyees:number;
totalSalarySum:number;
  constructor(public employeeService: EmployeeService ) { 
   
  }

  ngOnInit() {
    this.employeeService.getemploy().subscribe(employees => {this.employees = employees ;
      console.log(this.employees); 
      this.getTotalEmplyees();
    }); 
  }
  getTotalEmplyees(){
    let total = 0 ;
    let totalSalary=0  ;
    for (let index = 0; index < this.employees.length; index++) {
      total +=  1 ;
       totalSalary  +=     parseFloat(this.employees[index].salary.toString());

    }
    this.totalEmplyees = total;
    this.totalSalarySum = totalSalary;
    console.log(this.totalEmplyees);
    console.log(this.totalSalarySum);
  }

}
