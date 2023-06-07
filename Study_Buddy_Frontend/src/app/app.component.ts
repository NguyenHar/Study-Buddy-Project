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

  }
  ngOnInit() : void {
    this.isLoggedIn = this.userService.isLoggedIn;
  }
}
