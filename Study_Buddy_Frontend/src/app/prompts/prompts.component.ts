import { Component } from '@angular/core';
import { Prompt } from '../prompt';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prompts',
  templateUrl: './prompts.component.html',
  styleUrls: ['./prompts.component.css']
})
export class PromptsComponent {
  prompts:Prompt[] = [];

}
