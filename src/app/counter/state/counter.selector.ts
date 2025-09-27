import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";



const CounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(CounterState,(state)=>{
    return state.counter
});

export const getAddInputToggle = createSelector(CounterState,(state)=>{
    return state.toggleAddInput
});

export const getSubInputToggle = createSelector(CounterState,(state)=>{
    return state.toggleSubInput
});

export const getMultInputToggle = createSelector(CounterState,(state)=>{
    return state.toggleMultInput
});

export const getDivInputToggle = createSelector(CounterState,(state)=>{
    return state.toggleDivInput
});