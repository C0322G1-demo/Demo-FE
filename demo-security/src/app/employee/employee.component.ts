import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import {TokenStorageService} from '../service/token-storage.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getALl().subscribe(employeeList => {
      this.employeeList = employeeList;
    });
  }
}
