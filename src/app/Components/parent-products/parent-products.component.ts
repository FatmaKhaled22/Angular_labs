import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-parent-products',
  templateUrl: './parent-products.component.html',
  styleUrls: ['./parent-products.component.css']
})
export class ParentProductsComponent {
  listFilter : string = "";
  CreditCardNumber : string = "234567986541" ;
  ProductCart: Iproduct[] = [];
  
  addToCart(products: any) {
    this.ProductCart = products;
  }
  //  Date
  todayDate: Date = new Date();
}
