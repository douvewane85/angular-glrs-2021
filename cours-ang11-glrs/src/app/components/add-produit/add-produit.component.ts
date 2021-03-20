import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/app/core/models/produit';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  //Reactive Form
  produitFormGroupe!:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,
              private produitService:ProductService,
              private router:Router) { }

  ngOnInit(): void {

      this.produitFormGroupe=this.fb.group({
       name:["",[Validators.required,Validators.maxLength(50),Validators.minLength(5)]],
       prix:[0,Validators.required],
       quantity:[0,Validators.required],
       selected:[true,Validators.required],
       promo:[true,Validators.required]
      })
  }

  onAddProduit(){
  
    this.submitted=true
     /*if(this.produitFormGroupe.invalid){
          return
     }*/
     alert("xxx")
     const prod:Produit=this.produitFormGroupe.value
     this.produitService.addProduit(prod).subscribe(
       (data)=>{
         this.router.navigateByUrl("/produit")
       }
     )
  }

}
