import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpisokPokupokComponent } from './shared/components/spisok-pokupok/spisok-pokupok.component';
import { MainComponent } from './shared/components/main/main.component';
import { AddProductsComponent } from './shared/components/add-products/add-products.component';
import { EditProductsComponent } from './shared/components/edit-products/edit-products.component';



const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'spisok_pokupok',
    component:SpisokPokupokComponent
  },
  {
    path:'add_products',
    component: AddProductsComponent
  },
  {
    path:'edit_products',
    component: EditProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
