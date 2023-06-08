import { Component, EventEmitter, Output } from '@angular/core';
import { Prompt } from '../prompt';

@Component({
  selector: 'app-add-prompt',
  templateUrl: './add-prompt.component.html',
  styleUrls: ['./add-prompt.component.css']
})
export class AddPromptComponent {
  newPrompt:Prompt={} as Prompt;

  @Output() changed:EventEmitter<Prompt>=new EventEmitter<Prompt>();

  sendPrompt(){
    return this.changed.emit(this.newPrompt);
  }
}
