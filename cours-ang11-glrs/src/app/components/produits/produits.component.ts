import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ActionProduit, Produit } from '../../core/models/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:Produit[]|null=null;
  readonly ActionProduit=ActionProduit;
  constructor(private productService:ProductService,
             private router:Router) { }

  ngOnInit(): void {
      this.onGetAllProduct()
  }

  onGetAllProduct(){
    this.productService.getAllProduits().subscribe(
      (data)=> this.produits=data
    )
  }
  onGetSelectedProduct(){
    this.productService.getSelectedProduits().subscribe(
      (data)=> this.produits=data
    )
  }
  onGetPromoProduct(){
    this.productService.getPromoProduits().subscribe(
      (data)=> this.produits=data
    )
  }

  onSearchProducts(dataForm:any){
    
    this.productService.getProduitsLikeName(dataForm.keyword).subscribe(
      (data)=> this.produits=data
    )
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

}
