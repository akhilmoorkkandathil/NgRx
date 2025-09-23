import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent implements OnInit,OnDestroy {

  constructor(private store: Store<({counter: CounterState})>) {}

   counter:number = 0;
   counterSubscription: Subscription = new Subscription();


   ngOnInit(): void {
     this.store.select('counter').subscribe(data => {
       this.counter = data.counter;
     })
    }

   ngOnDestroy(): void {
      if(this.counterSubscription){
        this.counterSubscription.unsubscribe();
      }
    }

}
