import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ActionProduit, Produit } from '../../core/models/produit';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppDataState, DataStateEnum, ActionEvent, ProduitActionTypeEnum } from 'src/app/core/state/product.state';
import {catchError, map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  //Observable
  produits$?:Observable<AppDataState<Produit[]>>=null;
 
  constructor(private productService:ProductService,
             private router:Router) { }

  ngOnInit(): void {
      this.onGetAllProduct()
  }

  onGetAllProduct(){
    this.produits$=this.transformDataToAppDataState(this.productService.getAllProduits())
      
  }
  onGetSelectedProduct(){
    this.produits$=this.transformDataToAppDataState(this.productService.getSelectedProduits())
  }
  onGetPromoProduct(){
    this.produits$=this.transformDataToAppDataState(this.productService.getPromoProduits())
  }

  onSearchProducts(dataForm:any){
    
    this.produits$=this.transformDataToAppDataState(this.productService.getProduitsLikeName(dataForm.keyword))
  }

  onSelectProduct(produit:Produit,action:ActionProduit){

    this.productService.updateProduit(produit,action).subscribe(
        (data)=>produit=data
    )

  }


  onEditProduit(produit:Produit){
     this.router.navigateByUrl(`/edit-produit/${produit.id}`)
  }
  onDeleteProduit(produit:Produit){
    if(confirm("Veullez confirmer la suppression")){
      this.productService.deleteProduit(produit.id).subscribe(
        ()=>{
          alert("Poduit Supprimé")
            this.onGetAllProduct()
        }
      )
    }
      
  }


  private transformDataToAppDataState(produits:Observable<Produit[]>):Observable<AppDataState<Produit[]>>{
    return produits.pipe(
        map((produits:Produit[])=>({dataState:DataStateEnum.LOADED,data:produits}) ),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError((error)=>of({dataState:DataStateEnum.ERROR,errorMessage:error.Message}))
    );
  }

  OnActionEvent(event:ActionEvent){
      switch (event.type) {
        case ProduitActionTypeEnum.ALL_PRODUCT:
       
          this.onGetAllProduct()
          break; 
          case ProduitActionTypeEnum.SELECTED_PRODUCT:
          this.onGetSelectedProduct()
          break;
          case ProduitActionTypeEnum.PROMO_PRODUCT:
          this.onGetPromoProduct()
          break;
          case ProduitActionTypeEnum.SEARCH_PRODUCT:
          this.onSearchProducts(event.payload)
          break;
          case ProduitActionTypeEnum.SELECT_PRODUCT:
          this.onSelectProduct(event.payload['data'],event.payload['action'])
          break;
          case ProduitActionTypeEnum.EDIT_PRODUCT:
          this.onEditProduit(event.payload)
          break;
          case ProduitActionTypeEnum.DELETE_PRODUCT:
            this.onDeleteProduit(event.payload)
            break;
        default:
          break;
      }
  }
}
