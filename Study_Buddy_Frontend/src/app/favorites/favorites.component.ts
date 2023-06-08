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
  // allFavorites:Favorites[] = []; // Favorites list, containing the two foreign keys
  currentUser:User = {} as User;
  display:boolean=true;
  constructor(private userService:UserService, private favService:FavoriteService, private promptService:PromptService) {
  }
  

  ngOnInit() : void {
    this.currentUser = this.userService.currentUser;
    this.favService.getFavoritedPromptsByUserId(this.userService.currentUser.id).subscribe(
      (result) => {
        this.userFavorites = result;
      }
    );
  }

  toggleDisplay(){
    this.display=!this.display;
  }
  showAnswer(index:number){
    for(let i=0;i<this.userFavorites.length;i++){
     if(i==index){
       this.userFavorites[i].show=true;
     }
     else{
       this.userFavorites[i].show=false;
     }
    }
   }

   removeFavorite(promptId:number, index:number) {
    this.favService.deleteFavoriteByPromptId(promptId).subscribe(
      () => {
        this.userFavorites.splice(index,1);
      }
    );
   }
}

