import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActionProduit, Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private host:string=environment.host
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
    return this.http.get<Produit[]>(this.host+"/produits");
  }

  getAllProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.host}/produits`);
  }

  getSelectedProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.host}/produits?selected=true`);
  }
  getPromoProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.host}/produits?promo=true`);
  }

  getProduitsLikeName(keyword:string):Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.host}/produits?name_like=${keyword}`);
  }

  updateProduit(produit:Produit,action:ActionProduit=ActionProduit.ALL):Observable<Produit>{
    switch (action) {
      case ActionProduit.SELECTED:
        produit.selected=!produit.selected;
        break;
        case ActionProduit.PROMO:
          produit.promo=!produit.promo;
          break;
    }
   
    return this.http.put<Produit>(`${this.host}/produits/${produit.id}`,produit);
  }

  addProduit(produit:Produit):Observable<Produit>{
       return this.http.post<Produit>(`${this.host}/produits`,produit);
  }
}
