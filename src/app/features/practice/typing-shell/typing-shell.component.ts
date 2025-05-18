import { Component } from '@angular/core';

@Component({
  selector: 'app-typing-shell',
  imports: [],
  templateUrl: './typing-shell.component.html',
  styleUrl: './typing-shell.component.css'
})
export class TypingShellComponent {
  textVal:string = "Hello!";

  onKey(event: any){
    
  }
}
