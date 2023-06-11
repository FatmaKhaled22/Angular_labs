import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ProductWithApiService {

  filteredProducts :Iproduct[] =[] 

  http = {};
  constructor(private httpclient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  // methods => post , get ,put ,patch ,delete
  // get all products
  getAllProducts():Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.BaseAPIURL}/products`);
  };
  getPrdByID(prdID:number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${environment.BaseAPIURL}/products/${prdID}`);
  };
  getPrdByCatID(catID:number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${environment.BaseAPIURL}/products?categoryID${catID}`);
  };
  // search by product material
  searchByMaterial(mat:string):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.BaseAPIURL}/products?Material=${mat}`);
  };
  
  /////////////////////////////////////////////////////
  /// Day6
  addprd(newPrd: Iproduct): Observable<Iproduct> {
    return this.httpclient.post<Iproduct>(
      `${environment.BaseAPIURL}/products`,
      JSON.stringify(newPrd),this.http
    );
  }

}








