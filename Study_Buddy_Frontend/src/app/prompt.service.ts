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

  // Return list of prompt objects
  getAllPrompts():Observable<Prompt[]>{
    return this.http.get<Prompt[]>(this.url);
  }
  // Remove the prompt based on primary key from the database
  deletePrompt(id:number):Observable<any>{
    return this.http.delete<any>(this.url+"/"+id);
  }
  // Add prompt to the database
  addPrompt(newPrompt:Prompt):Observable<any>{
    return this.http.post<any>(this.url,newPrompt);
  }
  // Return prompt object based on primary key
  getPromptById(id:number):Observable<Prompt>{
    return this.http.get<Prompt>(this.url+"/"+id);
  }
  // Update prompt in the database based on primary key
  updatePrompt(newValue:Prompt, id:number):Observable<any> {
  return this.http.put<any>(this.url+"/"+id, newValue);
  }

}
