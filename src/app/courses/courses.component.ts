import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { coursesState } from './state/course.state';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { getCourses } from './state/course.selector';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor(private store: Store<({courses: coursesState})>) {}
  
     courses$:Observable<Course[]> | null = null;
  
     ngOnInit(): void {
       this.courses$ = this.store.select(getCourses)
      }
}
