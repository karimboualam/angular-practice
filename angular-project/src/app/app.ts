import { Component, signal } from '@angular/core';
import { CounterComponent } from './counter/counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  parentCount = signal(0);

  handleIncrement() {
    this.parentCount.update(c => c + 1);
  }
}
