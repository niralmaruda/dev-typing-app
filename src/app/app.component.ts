import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { TypingShellComponent } from "./features/practice/typing-shell/typing-shell.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TypingShellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dev-typing-app';
}
