import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";



const CounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(CounterState,(state)=>{
    return state.counter
})

export const getToggle = createSelector(CounterState,(state)=>{
    return state.toggleInputValue
})