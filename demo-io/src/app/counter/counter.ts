import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
 // standalone: true, 
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  @Input() count: number = 0;
  @Output() increment = new EventEmitter<void>();

 onIncrement() {
    this.increment.emit();
  }

}
