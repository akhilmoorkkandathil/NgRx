export interface CounterState{
    counter:number,
    toggleAddInput:boolean,
    toggleSubInput:boolean,
    toggleMultInput:boolean,
    toggleDivInput:boolean
}


export const inititalState:CounterState = {
    counter :0,
    toggleAddInput:false,
    toggleSubInput:false,
    toggleMultInput:false,
    toggleDivInput:false
}