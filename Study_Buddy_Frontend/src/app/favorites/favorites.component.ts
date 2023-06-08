import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FavoriteService } from '../favorite.service';
import { Favorites } from '../favorites';
import { Prompt } from '../prompt';
import { PromptService } from '../prompt.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  userFavorites:Prompt[] = []; // List of prompts that belongs to the logged in user
  allFavorites:Favorites[] = []; // Favorites list, containing the two foreign keys
  allPrompts:Prompt[] = [];
  currentUser:User = {} as User;
  constructor(private userService:UserService, private favService:FavoriteService, private promptService:PromptService) {
    this.favService.getAllFavorites().subscribe(
      (result) => {
        this.allFavorites = result;
      }
    );

    this.promptService.getAllPrompts().subscribe(
      (result) => {
        this.allPrompts = result;
      }
    );
  }

  ngOnInit() : void {
    this.currentUser = this.userService.currentUser;
    this.getUserFavorites();
  }


  getUserFavorites() : void {
    for (let i=0; i<this.allFavorites.length; i++){
      if (this.allFavorites[i].userId == this.currentUser.id){
        this.promptService.getPromptById(this.allFavorites[i].promptId).subscribe(
          (result) => {
            this.userFavorites.push(result);
          }
        );
      }
    }
  }




  // getFavorites() : void {
  //   this.favoritesList.forEach(this.getUserFavorites);
  // }

  // getUserFavorites(fav:Favorites) : void {
  //   console.log("test during");
  //   if (this.getLoggedInUser().id == fav.userId) {
  //     this.userFavorites.push(this.getPromptById(fav.promptId));
  //   }
  // }

  // getPromptById(id:number) : Prompt {
  //   let returnPrompt:Prompt = {} as Prompt;
  //   this.promptService.getPromptById(id).subscribe(
  //     (result) => {
  //       returnPrompt = result;
  //     }
  //   );
  //   return returnPrompt;
  // }
}
