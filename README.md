# AngularNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


header
home
counter
courses

counter-value
counter-button


# NGRX

STORE: Single source of truth for your application(Product, State, userState, orderState, cartState)

## In a store the state never directly modified instead new state is created
Action: Unique events happen in your applicaton components. They intiate state changes in the NgRx Store.

## An action have unique type values(can call it as action name), typically a string and an Optional payload(which is the relavant data needed to perform the state change)

Reducers: Its a pure function which takes the current state and an action as input, and returns a new state.

## selector

A feature selector is a pure function used to select a top-level slice of state that belongs to a specific feature of your application

Next step

Do cred for courses with the help of store.