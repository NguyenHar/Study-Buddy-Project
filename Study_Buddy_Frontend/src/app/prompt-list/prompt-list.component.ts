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
  display:boolean=true;
  prompt:Prompt={} as Prompt;
  

  constructor(private promptApi:PromptService,private favoriteApi:FavoriteService){
   
  }
  ngOnInit(): void {
    this.promptApi.getAllPrompts().subscribe(
      (result)=>{this.promptList=result}
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

  // checkFavorite(id:number) : boolean {
  //   this.favoriteApi.getAllFavorites().subscribe(
  //     (result) => {
  //       for (let i=0; i<result.length; i++) {
  //         if (result[i].promptId == id) {
  //           return true;
  //         }
  //       }
  //       return false;
  //     }
  //     );
  //   return false;
  // }


  // If there are foreign key references, you must delete those first
  deletePrompt(id:number, index:number) : void{
    this.promptApi.deletePrompt(id).subscribe(
      ()=>{
        this.promptList.splice(index,1);
      }
    );
  }

  updatePrompt(prompt:Prompt, index:number) : void {
    this.promptApi.updatePrompt(prompt, prompt.id).subscribe(
      (result) => {
        this.promptList[index] = prompt;
      }
    );
  }
}










