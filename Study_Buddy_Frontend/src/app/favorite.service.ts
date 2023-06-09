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

  // Retrieve full list of favorite objects
  getAllFavorites():Observable<Favorites[]>{
    return this.http.get<Favorites[]>(this.url);
  }

  // Delete from favorites based on favorite primary key
  deleteFavorites(id:number):Observable<any>{
    return this.http.delete<any>(this.url+"/"+id);
  }

  // Delete from favorites table based on prompt_id
  deleteFavoriteByPromptId(promptId:number):Observable<any>{
    return this.http.delete<any>(this.url+"/prompt/"+promptId);
  }

  // Add to favorites table
  addFavorites(newFavorites:Favorites):Observable<any>{
  return this.http.post<any>(this.url,newFavorites);
  }

  // Return favorite object based on favorite's primary key
  getFavoritesById(id:number):Observable<Favorites>{
  return this.http.get<Favorites>(this.url+"/"+id);
  }

  // This only returns a list of promptId's based on user id
  getUserFavorites(userId:number):Observable<any>{
    return this.http.get<Favorites>(this.url+"/user/"+userId);
  }

  // This returns a list of prompt objects based on user id
  getFavoritedPromptsByUserId(userId:number):Observable<any>{
    return this.http.get<Favorites>(this.url+"/prompt/"+userId);
  }
}
