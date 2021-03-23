import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { Categorie } from '../../core/models/categorie';
import { Observable, of } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/core/state/product.state';
import { map, startWith, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories?:Categorie[]=null
  categories$:Observable<AppDataState<Categorie[]>>
  readonly DataStateEnum=DataStateEnum
  constructor(private catService:CategorieService) { }

  ngOnInit(): void {
   /* this.catService.getAllCategories().subscribe(
      (data)=> this.categories=data
    )*/
    this.categories$=this.catService.getAllCategories().pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError((err)=>of({dataState:DataStateEnum.ERROR,errorMessage:err.Message}))
    )
  }

}
