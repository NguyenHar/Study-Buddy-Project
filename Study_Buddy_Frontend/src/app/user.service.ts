import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = "https://localhost:7188/api/Users";
  currentUser:User = {} as User;
  showLogin:boolean = true; // Display form
  isLoggedIn:boolean = false; // Display header menu
  constructor(private http:HttpClient) { }

  // Return list of all user objects
  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  // Return user object based on user primary key
  getUserById(id:number):Observable<User> {
    return this.http.get<User>(this.url + "/" + id);
  }
  // Add user to the database
  addUser(user:User):Observable<void> {
    return this.http.post<void>(this.url, user);
  }
  // Modify user in the database
  updateUser(id:number, newValues:User):Observable<any> {
    return this.http.put<any>(this.url + "/" + id, newValues);
  }
  // Remove user from the database
  deleteUser(id:number):Observable<any> {
    return this.http.delete<any>(this.url + "/" + id);
  }
}
