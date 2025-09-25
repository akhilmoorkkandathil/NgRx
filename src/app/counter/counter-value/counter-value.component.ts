import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent implements OnInit,OnDestroy {

  constructor(private store: Store<({counter: CounterState})>) {}

   counter:number = 0;
   counterSubscription: Subscription = new Subscription()

   ngOnInit(): void {
     this.counterSubscription = this.store.select(getCounter).subscribe(val => {
       this.counter = val;       
       console.log("value component");
       
     })
    }

   ngOnDestroy(): void {
      if(this.counterSubscription){
        this.counterSubscription.unsubscribe();
      }
    }

}
