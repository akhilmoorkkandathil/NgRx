import { createAction, props } from "@ngrx/store";


export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const customIncrement = createAction('customIncrement',props<{val:number}>());
export const customDecrement = createAction('customDecrement',props<{val:number}>());
export const customMultiply = createAction('customMultiply',props<{val:number}>());
export const customDivide = createAction('customDivide',props<{val:number}>());
export const toggleAddInput = createAction('toggleAddInput');
export const toggleSubInput = createAction('toggleSubInput');
export const toggleMultInput = createAction('toggleMultInput');
export const toggleDivInput = createAction('toggleDivInput');