import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-b',
 // standalone: true, 
  imports: [],
  templateUrl: './child-b.html',
  styleUrl: './child-b.css'
})
export class ChildB {

   @Input() count: number = 0;
  @Output() decrement = new EventEmitter<void>();
 onDecrement() {
    this.decrement.emit();
  }
}
