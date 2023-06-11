import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { Icategory } from 'src/app/Models/icategory';
import { ProductService } from 'src/app/Services/product.service';
import { ProductWithApiService } from 'src/app/Services/product-with-api.service';
import { CategoryWithApiService } from 'src/app/Services/category-with-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  storedata : Store = new Store('BookShop',['Alex','Qina','Cairo'],'assets/img/logo.jpg');

  // productsList: Iproduct[];
  // public category : Icategory[];
  Prodcategory : Icategory[] = [];
  filteredProducts : Iproduct[] = [];
  ProductCart: Iproduct[] = [];
  products:Iproduct[]=[];
  
  ClientName : string = 'Fatma';
  selectcat : number = 2;
  IsPurshased : boolean = true;


  toggleImage() {
    this.IsPurshased = !this.IsPurshased;
  }
  ngOnInit(): void {
    // this.filteredProducts = this.productsList;
    ////////////////////////////////////////////////////
    // this.filteredProducts = this.prdService.getAllProds();
    // this.Prodcategory = this.prdService.getAllCatProds();
    //////////////////////////////////////////////////////
    ///Day5
    this.prdAPIService.getAllProducts().subscribe({
      next: (data) => {
        this.filteredProducts = data;
        console.log(this.filteredProducts);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.catAPIService.getAllCateogories().subscribe({
      next: (data) => {
        this.Prodcategory = data;
        console.log(this.Prodcategory);
      },
      error: (err) => {
        console.log(err);
      },
    });

  }
  


  buyProduct(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
  // //////////////////////////////////////////////////////////////
  ///  filter
  private _listFilter: string = '';
  // get => as property
  @Input() get listFilterChild():string{
    return this._listFilter;
  }
  set listFilterChild(value: string) {
    this._listFilter = value;
    // console.log('In setter', value);
    // this.filteredProducts = this.searchFilter(parseInt(value));
    // console.log(this.filteredProducts);
    ///////////////////////////////////////////////////////////////
    // this.filteredProducts = this.prdService.searchFilter(parseInt(value));
    ////////////////////////////////////////////////////////////////
    this.prdAPIService.getAllProducts().subscribe((data) => {
      this.filteredProducts = data.filter((prd) =>
        prd.name.toLocaleLowerCase().includes(value)
      );
    });
  }
  
  // searchFilter(filterBy: number): Iproduct[] {
  //   // filterBy = filterBy.toLocaleLowerCase();
  //   return this.productsList.filter((prod: Iproduct) =>
  //     // prd.name.toLocaleLowerCase().includes(filterBy)
  //     prod.price == filterBy 
  //   );
  // };
  // //////////////////////////////////////////////////////////////
  @Output() CartProducts: EventEmitter<Iproduct[]> = new EventEmitter<Iproduct[]>();
  cartHandling(product: Iproduct) {

    product.IsPurchased = !product.IsPurchased;
    this.CartProducts.emit(
      this.filteredProducts.filter((item) => item.IsPurchased && item.quantity)
    );
    // console.log(product.IsPurchased);
    // console.log(product.quantity);
  }
  
  decrease(product: Iproduct) {
    product.quantity = product.quantity == 0 ? 0 : -- product.quantity;
    return product;
  }
  increase(product: Iproduct) {
    product.quantity += 1;
    return product;
  }
  

  // ///////////////////////////////////////////////////////////////////
  constructor(
    private prdService:ProductService , 
    private router:Router , 
    private activedRoute: ActivatedRoute,
    private prdAPIService:ProductWithApiService ,
    private catAPIService:CategoryWithApiService) {


  }
  
  prdDetails(prdID:number){
    this.router.navigate(['/productDetails',prdID])
    console.log("send data is complet");
  }
}
