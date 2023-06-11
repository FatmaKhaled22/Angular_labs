import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icategory } from '../Models/icategory';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryWithApiService {

  constructor(private httpclient:HttpClient) { }

  // methods => post , get ,put ,patch ,delete
  // get all Cateogories
  getAllCateogories():Observable<Icategory[]>{
    return this.httpclient.get<Icategory[]>(`${environment.BaseAPIURL}/categories`);
  };
  getCateogoriesID(catID:number):Observable<Icategory>{
    return this.httpclient.get<Icategory>(`${environment.BaseAPIURL}/categories/${catID}`);
  };
}
