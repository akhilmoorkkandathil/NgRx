import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customDecrement, customDivide, customIncrement, customMultiply, toggleDivInput, toggleMultInput, toggleSubInput } from '../state/counter.action';
import { Observable } from 'rxjs';
import { getAddInputToggle, getDivInputToggle, getMultInputToggle, getSubInputToggle } from '../state/counter.selector';
import { toggleAddInput } from '../state/counter.action';
@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit{
  
  counter: number = 0;
  toggleAddInputVal$: Observable<boolean> | null = null;
  toggleSubInputVal$: Observable<boolean> | null = null;
  toggleMultInputVal$: Observable<boolean> | null = null;
  toggleDivInputVal$: Observable<boolean> | null = null;
  
  constructor( private store:Store<({counter: CounterState})>) {}

  ngOnInit(): void {
    this.toggleAddInputVal$ = this.store.select(getAddInputToggle);
    this.toggleSubInputVal$ = this.store.select(getSubInputToggle);
    this.toggleMultInputVal$ = this.store.select(getMultInputToggle);
    this.toggleDivInputVal$ = this.store.select(getDivInputToggle);
  }

  incrementBy(){
    this.store.dispatch(customIncrement({val:this.counter}));
    this.counter = 0;
  }

  decrementBy(){
    this.store.dispatch(customDecrement({val:this.counter}));
    this.counter = 0;
  }

  multiplyBy(){
    this.store.dispatch(customMultiply({val:this.counter}));
    this.counter = 0;
  }

  divideBy(){
    this.store.dispatch(customDivide({val:this.counter}));
    this.counter = 0;
  }

  toggleAddInput(){
    this.store.dispatch(toggleAddInput());
  }

  toggleSubInput(){
    this.store.dispatch(toggleSubInput());
  }

  toggleMultInput(){
    this.store.dispatch(toggleMultInput());
  }

  toggleDivInput(){
    this.store.dispatch(toggleDivInput());
  }

}
