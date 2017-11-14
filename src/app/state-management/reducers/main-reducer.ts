import {ActionReducer, Action} from "@ngrx/store";
import {State, intitialState} from "../state/main-state";
import {INCREMENT, EVENT_FROM_EFFECT, DECREMENT} from "../actions/main-action-creator";

export const mainReducer : ActionReducer < State > = (state = intitialState, action : Action) => {
  console.log('Action came in! ' + action.type);
  console.log(action);
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      {
        console.log('Increment action being handled!');
        return {
          ...state,
          counter: state.counter + 1,
          actionType: 'increment'
        }
      }
      case DECREMENT:
      {
        console.log('Increment action being handled!');
        return {
          ...state,
          counter: state.counter - 1,
          actionType: 'decrement'
        }
      }
    case EVENT_FROM_EFFECT:
      {
        console.log('we cheesin in the reducer over here!');
        return {...state,counter: 4}
      }
    default:
      {
        return state;
      }
  }
};