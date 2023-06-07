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
  showLogin:boolean = true;
  
  constructor(private userService:UserService) {
    this.userService.getAllUsers().subscribe(
      (result) => {
        this.users = result;
        this.selectedUser = this.users[0]; // Default to top of the list in login page
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


  // Hide the login menu
  hideLogin() : void {
    this.showLogin = !this.showLogin;
  }
}
