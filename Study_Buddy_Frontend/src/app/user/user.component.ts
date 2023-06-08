import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  newUser:User = {} as User;
  users:User[] = [];
  selectedUser:User = {} as User;
  
  constructor(private userService:UserService) {
    this.userService.getAllUsers().subscribe(
      (result) => {
        this.users = result;
      }
    );
  }

  // Form to add new person to login menu
  addUser() : void {
    this.userService.addUser(this.newUser).subscribe(
      () => {
        this.users.push(this.newUser);
        this.newUser = {} as User;
      }
    );
  }

  // selectUser() : void {
  //   this.userService.currentUser = this.selectedUser;
  //   this.userService.isLoggedIn = true;
  // }

  getUser() : User {
    return this.userService.currentUser;
  }

  checkLoginStatus() : boolean {
    return this.userService.showLogin;
  }

  // Hide the login menu
  logIn() : void {
    this.userService.currentUser = this.selectedUser;
    this.userService.isLoggedIn = true;
    this.userService.showLogin = !this.userService.showLogin;
  }

  logOut() : void {
    this.userService.showLogin = !this.userService.showLogin;
    this.userService.isLoggedIn = false;
  }
}
