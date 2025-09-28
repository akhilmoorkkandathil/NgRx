import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coursesState } from "./course.state";


const courseSelector = createFeatureSelector<coursesState>('courses');

export const getCourses = createSelector(courseSelector,(state)=>{
    return state.courses
});
