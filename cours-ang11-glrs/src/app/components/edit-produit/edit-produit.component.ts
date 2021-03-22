import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionProduit, Produit } from 'src/app/core/models/produit';
import { ProductService } from '../../core/services/product.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  constructor(private activedRoute:ActivatedRoute,
              private produitService:ProductService,
              private router:Router,
             ) { }
  private produitId?:number=null
  produitFormGroupe!:FormGroup
  submitted:boolean=false
  ngOnInit(): void {
          this.produitId=this.activedRoute.snapshot.params.id
          this.produitService.getProduitById( this.produitId).subscribe(
            (produit)=> {
              this.produitFormGroupe=new FormGroup({
                id:new FormControl(produit.id),
                name:new FormControl(produit.name),
                prix:new FormControl(produit.prix,),
                quantity:new FormControl(produit.quantity),
                selected:new FormControl(produit.selected),
                promo:new FormControl(produit.promo)
              })
            }
            
          )
          
        
          
  }

  onUpdateProduit(){
       this.submitted=true 
       if(this.produitFormGroupe.invalid)  return 
       this.produitService.updateProduit(this.produitFormGroupe.value).subscribe(
         (data)=> this.router.navigateByUrl("/produit")
       )
  }

  get controls(){
    return this.produitFormGroupe.controls;
}
}
