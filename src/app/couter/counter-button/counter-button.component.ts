import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {
  @Output()
  incrementClicked:EventEmitter<void> = new EventEmitter<void>();

  @Output()
  decrementClicked:EventEmitter<void> = new EventEmitter<void>();

  @Output()
  resetClicked:EventEmitter<void> = new EventEmitter<void>();

  increment(){    
    this.incrementClicked.emit();
  }

  decrement(){
    this.decrementClicked.emit();
  }

  reset(){
    this.resetClicked.emit();
  }

}
