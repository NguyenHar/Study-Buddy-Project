import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Study_Buddy_Frontend';
  isLoggedIn:boolean = false;
  constructor(private userService:UserService) {
    this.isLoggedIn = this.userService.isLoggedIn;
  }
  checkLogin() : boolean {
    return this.userService.isLoggedIn;
  }
}
