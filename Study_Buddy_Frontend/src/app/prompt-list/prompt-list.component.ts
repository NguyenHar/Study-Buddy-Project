import { Component, OnInit } from '@angular/core';
import { Prompt } from '../prompt';
import { PromptService } from '../prompt.service';
import { FavoriteService } from '../favorite.service';
import { Favorites } from '../favorites';

@Component({
  selector: 'app-prompt-list',
  templateUrl: './prompt-list.component.html',
  styleUrls: ['./prompt-list.component.css']
})
export class PromptListComponent implements OnInit{

  promptList:Prompt[]=[];
  favoriteList:Favorites[]=[];
  display:boolean=true;
  prompt:Prompt={} as Prompt;
  

  constructor(private promptApi:PromptService,private favoriteApi:FavoriteService){
   
  }
  ngOnInit(): void {
    this.promptApi.getAllPrompts().subscribe(
      (result)=>{this.promptList=result}
     );
     this.favoriteApi.getAllFavorites().subscribe(
      (result)=>{this.favoriteList=result}
     );
  }



  toggleDisplay(){
    this.display=!this.display;
  }

  addPrompt(newPrompt:Prompt){
  this.promptApi.addPrompt(newPrompt).subscribe(
    ()=>{
      this.promptList.push(newPrompt);
    }
  )
  this.display=true;
  }

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

  deletePrompt(id:number,index:number){
    this.promptApi.deletePrompt(id).subscribe(
      (result)=>{
        this.promptList.splice(index,1);
      }
    )
  }

  updatePrompt(prompt:Prompt, index:number) : void {
    this.promptApi.updatePrompt(prompt, prompt.id).subscribe(
      (result) => {
        this.promptList[index] = prompt;
      }
    );
  }

}










