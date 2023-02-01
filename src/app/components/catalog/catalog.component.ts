import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products:Product[] = [];
  availableStock:string[] = [
    "headphones",
    "airpods",
    "body oil",
    "camera",
    "cocooil",
    "heels",
    "jar",
    "laptop",
    "lipstick",
    "perfume",
    "purse",
    "sandals",
    "shoes",
    "socks",
    "sunglasses",
    "tea",
    "tennis",
    "toothbrush",
    "watch",
    "water bottle"
  ];

  constructor() {
    for(let i = 0; i < 20; i++){
      this.products[i] = {
        id:i,
        name: this.availableStock[i],
        price: 12 * i,
        description: "Really good item",
        image: "/assets/images/" + this.availableStock[i] + ".jpg"
      };
    }
  }

  ngOnInit(): void {
  }

}
