import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { ChildB } from './child-b/child-b';

@Component({
  selector: 'app-root',
 // imports: [RouterOutlet, Counter],
   imports: [ Counter, ChildB],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('demo-io');
  parentCount = signal(0);
   handleIncrement() {
    this.parentCount.update(c => c + 1);
  }
   handleDecrement() {
    this.parentCount.update(c => c - 1);
  }
}
