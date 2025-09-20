import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() count: number = 0;
  @Output() increment = new EventEmitter<void>();

  onIncrement() {
    this.increment.emit();
  }
}
