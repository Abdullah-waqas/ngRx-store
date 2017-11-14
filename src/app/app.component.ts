import {INCREMENT, DECREMENT} from './state-management/actions/main-action-creator';
import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "./state-management/state/main-state";

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  title = 'app';
  counter : number;
  constructor(private store : Store < State >) {
    this.store.select('mainReducer').subscribe((data : State) => {
      console.log(data);
      this.counter = data.counter;
    });
  }
  onIncrement(){
    this.store.dispatch({type: INCREMENT, payload: {obj: 'FROM INCREMENT'}});
  }
  onDecrement(){
    this.store.dispatch({type: DECREMENT, payload: {obj: 'FROM DECREMENT'}});
  }

}
