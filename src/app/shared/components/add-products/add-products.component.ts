import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpProductService } from '../../services/http-product.service';
import { MyProduct } from 'src/app/product.model';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  products:MyProduct[]= [];
  constructor(private http: HttpProductService,) { }
  myProductForm:FormGroup;
  @Output() addProduct = new EventEmitter<MyProduct>();
  title:string;
  count:number;

  ngOnInit(): void {
    this.myProductForm = new FormGroup({
      title:new FormControl(null, [Validators.required]),
      count: new FormControl(null, [Validators.required]),
    })
  }
  async onAddProduct(){
    try{
    this.products = await this.http.getProduct();
    const id = this.products.length>0?this.products[this.products.length-1].id+1:0;
    // this.http.postProduct(products[id]);
    this.products.push({id:id, title:this.title, count:this.count});
    this.http.postProduct(this.products[this.products.length-1]);
    }catch(error){
      console.log(error);
    }finally{
      this.http.getProduct();
    }
  }
}
