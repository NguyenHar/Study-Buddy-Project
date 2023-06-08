import { Component, Input } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  loggedInUser:User = {} as User;
  constructor(private userService:UserService) {

  }
  

  ngOnInit() : void {
    this.loggedInUser = this.userService.currentUser;
  }

}

