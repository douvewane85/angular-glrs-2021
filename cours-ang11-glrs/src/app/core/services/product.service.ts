import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

 getProducts():Observable<Produit[]>{
    return of([
      {
        name:"Lait",
        quantity:1,
        prix:34
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
}
