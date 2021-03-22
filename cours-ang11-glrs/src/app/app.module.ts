import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursComponent } from './components/cours/cours.component';
import { CharAtPipe } from './core/pipes/char-at.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CommandeComponent } from './components/commande/commande.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditProduitComponent } from './components/edit-produit/edit-produit.component';
import { NavBarProduitComponent } from './components/produits/nav-bar-produit/nav-bar-produit.component';
import { ListProduitsComponent } from './components/produits/list-produits/list-produits.component';
import { ItemProduitComponent } from './components/produits/list-produits/item-produit/item-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    CharAtPipe,
    NavBarComponent,
    ProduitsComponent,
    AddProduitComponent,
    CategoriesComponent,
    CommandeComponent,
    PageNotFoundComponent,
    EditProduitComponent,
    NavBarProduitComponent,
    ListProduitsComponent,
    ItemProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
