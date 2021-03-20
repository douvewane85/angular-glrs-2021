import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CommandeComponent } from './components/commande/commande.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProduitsComponent } from './components/produits/produits.component';
const routes: Routes = [
  {path:"produit",component:ProduitsComponent},
  {path:"categorie",component:CategoriesComponent},
  {path:"commande",component:CommandeComponent},
  {path:"new-produit",component:AddProduitComponent},
  {path:"",redirectTo:"/produit",pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
