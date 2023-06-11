import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Subscription } from 'rxjs';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductWithApiService } from 'src/app/Services/product-with-api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent{
  paramId:string = ''
  query:string = ''

  product:Iproduct = {} as Iproduct
  constructor(private route:Router ,private router:ActivatedRoute ,private prdAPIService:ProductWithApiService){}

  // ngOnInit(): void {
  //   const paramId = this.router.snapshot.paramMap.get('id')
  //   const querys = this.router.snapshot.queryParamMap.get('mode')
  //   if(paramId){
  //     this.paramId = paramId
  //   }
  //   if(querys){
  //     this.query = querys
  //   }

  //   if(querys === '1'){
  //     if(paramId){
  //     this.prdAPIService.getPrdByID(+paramId).subscribe(data => this.product = data)
  //     }
  //   }
  // };

  
  // addProduct(){
  //   if(this.query = "0"){
  //     this.prdAPIService.addNewProduct(this.product).subscribe(data => this.prdAPIService.addProduct.emit(data))
  //      this.route.navigate(['/index'])
  //   }

  // }

  // updateProduct(){
    
  //   if(this.query = "1"){
  //    this.prdAPIService.updateProduct(this.product).subscribe(data => this.prdAPIService.editProdut.emit(data))
  //    this.route.navigate(['/index'])
  //  }
  // }

  
  addProduct() {
    // static data
    let prd:Iproduct={
      id:35,
      name: 'vas',
      price: 3000,
      quantity: 1,
      categoryID: 4,
      Material : 'metal',   
    }
    this.prdAPIService.addprd(prd).subscribe({
      next:(product)=>{
        console.log(product);
      },
      error:(error)=>{
        console.log(error);
      }
    });

  }

  
}

