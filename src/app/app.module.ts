import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SpisokPokupokComponent } from './shared/components/spisok-pokupok/spisok-pokupok.component';
import { AddProductsComponent } from './shared/components/add-products/add-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductsComponent } from './shared/components/edit-products/edit-products.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppComponent,
    SpisokPokupokComponent,
    AddProductsComponent,
    EditProductsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
