import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prompt } from '../prompt';

@Component({
  selector: 'app-edit-prompt',
  templateUrl: './edit-prompt.component.html',
  styleUrls: ['./edit-prompt.component.css']
})
export class EditPromptComponent {
  editing:boolean=false;

  @Input() editPrompt:Prompt={} as Prompt;

  @Output() changed = new EventEmitter<Prompt>();

  finishEditing():void{
    this.changed.emit(this.editPrompt);
    this.toggleDisplay();
  }
  
  toggleDisplay() : void {
    this.editing=!this.editing;
  }
}
