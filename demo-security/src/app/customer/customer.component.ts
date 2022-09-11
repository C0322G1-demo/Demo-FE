import { Component, OnInit } from '@angular/core';
import {CustomerService} from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerList().subscribe(item => {
      this.customerList = item;
    });
  }

}
