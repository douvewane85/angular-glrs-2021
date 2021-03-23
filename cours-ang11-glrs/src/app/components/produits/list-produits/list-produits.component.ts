import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionProduit, Produit } from 'src/app/core/models/produit';
import { ActionEvent, AppDataState, DataStateEnum, ProduitActionTypeEnum } from 'src/app/core/state/product.state';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
@Input("produits") produits$?:Observable<AppDataState<Produit[]>>=null;
@Output("productEvent") productEventEmetter:EventEmitter<ActionEvent>=new EventEmitter();
readonly ActionProduit=ActionProduit
readonly DataStateEnum=DataStateEnum
constructor() { }

  ngOnInit(): void {
  }
  onSelectProduct(produit:Produit,actionType:ActionProduit){
     this.productEventEmetter.emit({
      type:ProduitActionTypeEnum.SELECT_PRODUCT,
      payload:{data:produit,action:actionType} 
     })
  }
  onEditProduit(produit:Produit){
    this.productEventEmetter.emit({
      type:ProduitActionTypeEnum.EDIT_PRODUCT,
      payload:produit 
     })
  }
  onDeleteProduit(produit:Produit){
    this.productEventEmetter.emit({
      type:ProduitActionTypeEnum.DELETE_PRODUCT,
      payload:produit 
     })
  }
}
