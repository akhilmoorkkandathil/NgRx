import { createReducer, on } from "@ngrx/store";
import { inititalState } from "./counter.state";
import { customIncrement, decrement, increment, reset, toggleInput } from "./counter.action";



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
    }),
    on(customIncrement,(state,action)=>{
        return {
            ...state,
            counter:state.counter+ +action.val
        }
    }),
    on(toggleInput,(state) =>{
        return {
            ...state,
            toggleInputValue:!state.toggleInputValue
        }
    })
)