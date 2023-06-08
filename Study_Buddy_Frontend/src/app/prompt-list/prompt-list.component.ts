import { Component, OnInit } from '@angular/core';
import { Prompt } from '../prompt';
import { PromptService } from '../prompt.service';
import { FavoriteService } from '../favorite.service';
import { Favorites } from '../favorites';
import { UserService } from '../user.service';

@Component({
  selector: 'app-prompt-list',
  templateUrl: './prompt-list.component.html',
  styleUrls: ['./prompt-list.component.css']
})
export class PromptListComponent implements OnInit{

  promptList:Prompt[]=[];
  display:boolean=true;
  prompt:Prompt={} as Prompt;
  userFavorites:number[] = [];

  constructor(private promptApi:PromptService, 
    private favoriteApi:FavoriteService,
    private userApi:UserService){}

  ngOnInit(): void {
    this.promptApi.getAllPrompts().subscribe(
      (result)=>{this.promptList=result;}
     );
    
    
    this.favoriteApi.getUserFavorites(this.userApi.currentUser.id).subscribe(
      (result)=>{this.userFavorites=result;}
    );
  }

  toggleDisplay(){
    this.display=!this.display;
  }

  // Add a new prompt to the database and list
  addPrompt(newPrompt:Prompt){
  this.promptApi.addPrompt(newPrompt).subscribe(
    ()=>{
      this.promptList.push(newPrompt);
    }
  )
  this.display=true;
  }

  // Not used?
  showAnswer(index:number){
   for(let i=0;i<this.promptList.length;i++){
    if(i==index){
      this.promptList[i].show=true;
    }
    else{
      this.promptList[i].show=false;
    }
   }
  }

  // Adding prompt by id to list of favorites
  addFavorite(promptId:number) : void {
    let fav : Favorites = { id:0, userId:this.userApi.currentUser.id, promptId:promptId, prompt:null,user:null };
    this.favoriteApi.addFavorites(fav).subscribe(
      () => {}
    );
  }

  // Used to display "add to favorite" button on card if not favorited
  checkFavorite(promptId:number) : boolean {
    for (let i=0; i<this.userFavorites.length; i++)
    {
      if (this.userFavorites[i] == promptId)
        return true;
    }
    return false;
  }


  // Removing prompt from database and list
  deletePrompt(id:number, index:number) : void{
    this.promptApi.deletePrompt(id).subscribe(
      ()=>{
        this.promptList.splice(index,1);
      }
    );
  }

  // Updating prompt in database and list
  updatePrompt(prompt:Prompt, index:number) : void {
    this.promptApi.updatePrompt(prompt, prompt.id).subscribe(
      (result) => {
        this.promptList[index] = prompt;
      }
    );
  }
}










