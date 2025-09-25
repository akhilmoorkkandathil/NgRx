import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement, toggleInput } from '../state/counter.action';
import { RouterTestingHarness } from '@angular/router/testing';
import { Subscription } from 'rxjs';
import { getToggle } from '../state/counter.selector';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit,OnDestroy{
  
  counter: number = 0;
  toggleInputValue: boolean = false;
  storeSubscription: Subscription = new Subscription();
  
  constructor( private store:Store<({counter: CounterState})>) {}

  ngOnInit(): void {
    this.storeSubscription = this.store.select(getToggle).subscribe(data => {
      this.toggleInputValue = data;
      console.log("toggleInputValue");
      
    })
  }

  incrementBy(){
    this.store.dispatch(customIncrement({val:this.counter}))
  }

  toggleInput(){
    this.store.dispatch(toggleInput())
  }

  ngOnDestroy(): void {
    if(this.storeSubscription){
      this.storeSubscription.unsubscribe();
    }
  }

}
