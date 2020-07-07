import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProduct } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {
  routeApi = 'http://localhost:3000/products';
  constructor(private http:HttpClient) { }
  getProduct():Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }
  postProduct(data:MyProduct){
    return this.http.post(this.routeApi, data).toPromise();
  }
  editProduct(data:MyProduct){
    return this.http.put(this.routeApi+`/${data.id}`, data).toPromise();
  }
  deleteProduct(id:number){
    return this.http.delete(this.routeApi+`/${id}`).toPromise();
  }
  changeStatusProduct(data:MyProduct){
    return this.http.put(this.routeApi+`/${data.id}`, data).toPromise();
  }
}
