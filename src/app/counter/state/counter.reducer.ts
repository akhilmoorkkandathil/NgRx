import { createReducer, on } from "@ngrx/store";
import { inititalState } from "./counter.state";
import { customDecrement, customDivide, customIncrement, customMultiply, decrement, increment, reset, toggleAddInput, toggleDivInput, toggleMultInput, toggleSubInput } from "./counter.action";



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
            counter:state.counter + +action.val
        }
    }),
    on(customDecrement,(state,action) =>{
        return {
            ...state,
            counter:state.counter - +action.val
            }
    }),
    on(customMultiply,(state,action) =>{
        return {
            ...state,
            counter:state.counter * +action.val
            }
    }),
    on(customDivide,(state,action) =>{
        return {
            ...state,
            counter:state.counter / +action.val
            }
    }),
    on(toggleAddInput,(state) =>{
        return {
            ...state,
            toggleAddInput:!state.toggleAddInput,
            toggleDivInput:false,
            toggleMultInput:false,
            toggleSubInput:false
        }
    }),
    on(toggleSubInput,(state) =>{
        return {
            ...state,
            toggleSubInput:!state.toggleSubInput,
            toggleDivInput:false,
            toggleMultInput:false,
            toggleAddInput:false
        }
    }),
    on(toggleMultInput,(state) =>{
        return {
            ...state,
            toggleMultInput:!state.toggleMultInput,
            toggleDivInput:false,
            toggleSubInput:false,
            toggleAddInput:false
        }
    }),
    on(toggleDivInput,(state) =>{
        return {
            ...state,
            toggleDivInput:!state.toggleDivInput,
            toggleSubInput:false,
            toggleMultInput:false,
            toggleAddInput:false
        }
    })
)