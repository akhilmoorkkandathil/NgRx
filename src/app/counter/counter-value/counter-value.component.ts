import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent implements OnInit {

  constructor(private store: Store<({counter: CounterState})>) {}

   counter$:Observable<number> | null = null;

   ngOnInit(): void {
     this.counter$ = this.store.select(getCounter)
    }

}
