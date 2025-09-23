import { createReducer, on } from "@ngrx/store";
import { inititalState } from "./counter.state";
import { decrement, increment, reset } from "./counter.action";



export const counterReducer = createReducer(
    inititalState,
    on(increment,(state)=>{
        return {
            ...state,
            counter:state.counter+1
        }
    }),
    on(decrement,(state)=>{
        return {
            ...state,
            counter:state.counter-1
        }
    }),
    on(reset,(state)=>{
        return {
            ...state,
            counter:0
        }
    })
)