import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

 getProducts():Observable<Produit[]>{
    return of([
      {
        name:"Lait",
        quantity:1,
        prix:34,
        createAt:new Date()
      },
      {
        name:"Cafe",
        quantity:1,
        prix:34,
        selected:true
      },
      {
        name:"Miel",
        quantity:1,
        prix:34,
        selected:false,
        promo:true
      },
    ])
  }

  getProductsWithApi():Observable<Produit[]>{
    return this.http.get<Produit[]>("http://localhost:3000/produits");
  }
}
