import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product:Product = {
    id:0,
    name:"",
    price:0,
    description:"",
    image:""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
