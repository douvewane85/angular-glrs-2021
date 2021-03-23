import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEvent, ProduitActionTypeEnum } from 'src/app/core/state/product.state';


@Component({
  selector: 'app-nav-bar-produit',
  templateUrl: './nav-bar-produit.component.html',
  styleUrls: ['./nav-bar-produit.component.css']
})
export class NavBarProduitComponent implements OnInit {
@Output() produitEventEmetter:EventEmitter<ActionEvent>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProduct(){
     this.produitEventEmetter.emit({type:ProduitActionTypeEnum.ALL_PRODUCT})
  }

  onGetSelectedProduct(){
    this.produitEventEmetter.emit({type:ProduitActionTypeEnum.SELECTED_PRODUCT})
  }
  onGetPromoProduct(){
     this.produitEventEmetter.emit({type:ProduitActionTypeEnum.PROMO_PRODUCT})
  }

  onSearchProducts(dataForm:any){
    this.produitEventEmetter.emit({type:ProduitActionTypeEnum.SEARCH_PRODUCT,
    payload:dataForm})
  }
}
