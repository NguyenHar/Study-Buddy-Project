import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prompt } from './prompt';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  url:string="https://localhost:7188/api/Prompts"
  constructor(private http:HttpClient) { }

  getAllPrompts():Observable<Prompt[]>{
    return this.http.get<Prompt[]>(this.url);
  }
  
  deletePrompt(id:number):Observable<any>{
    return this.http.delete<any>(this.url+"/"+id)
  }

 addPrompt(newPrompt:Prompt):Observable<any>{
  return this.http.post<any>(this.url,newPrompt)
 }


 getPromptById(id:number):Observable<Prompt>{
  return this.http.get<Prompt>(this.url+"/"+id)
 }


}
