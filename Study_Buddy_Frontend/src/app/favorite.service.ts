import { Injectable } from '@angular/core';
import { Favorites } from './favorites';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
url:string="https://localhost:7188/api/Favorited"
constructor(private http:HttpClient) { }

getAllFavorites():Observable<Favorites[]>{
  return this.http.get<Favorites[]>(this.url);
}

deleteFavorites(id:number):Observable<any>{
  return this.http.delete<any>(this.url+"/"+id)
}

addFavorites(newFvorites:Favorites):Observable<any>{
return this.http.post<any>(this.url,newFvorites)
}


getFavoritesById(id:number):Observable<Favorites>{
return this.http.get<Favorites>(this.url+"/"+id)
}
}
