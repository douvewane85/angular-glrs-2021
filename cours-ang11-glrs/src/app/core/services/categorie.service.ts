import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  host:string=environment.host
  constructor(private http:HttpClient) { }

  getAllCategories():Observable<Categorie[]>{
     return this.http.get<Categorie[]>(`${this.host}/categorie`)
  }
}
