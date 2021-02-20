import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers:any;
  public errorMessage:any;

  constructor(private customerService:CustomerServiceService) { }

  ngOnInit(): void {
    this.customerService.getCustomers()
    .subscribe(data=>{
      this.customers=data;
    },err=>{
      this.errorMessage=err.error.message;
    })
  }

}
