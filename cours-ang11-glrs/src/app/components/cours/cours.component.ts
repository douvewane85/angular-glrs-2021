import { Component, OnInit } from '@angular/core';
import { Produit } from '../../core/models/produit';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  title:string="Bonjour à tous"
  a:number=12
  mois:number=1
  numbers:number[]|null=[1,3,6]
  prod:Produit={
    name:"Lait",
    quantity:1,
    prix:34
  }
  produits?:Produit[]=null

  constructor(private productService:ProductService) { }
  ngOnInit(): void {
      this.productService.getProductsWithApi().subscribe(
         (data)=>  this.produits=data
      )
  }

  

  onClikMe(){
    alert("Bonjour")
  }
  
  
}
