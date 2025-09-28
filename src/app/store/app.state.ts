import { counterReducer } from "../counter/state/counter.reducer";
import { coursesReducer } from "../courses/state/course.reducer";

export const AppState = {
    counter:counterReducer,
    courses:coursesReducer
}