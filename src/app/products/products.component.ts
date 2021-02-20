import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any;
  public errorMessage:any;

  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(data=>{
      this.products=data;
    },err=>{
      this.errorMessage=err.error.message;
    })
  }

}
