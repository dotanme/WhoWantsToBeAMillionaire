// score state reducer
import { ScoreActions, ScoreActionTypes } from '../actions/score.actions';

export const initialState = 0;

export function reducer(state: number = initialState, action: ScoreActions): number {
  switch (action.type) {
    case ScoreActionTypes.Increment:
        const incValue = state + action.payload.amount;
        return incValue;
    case ScoreActionTypes.Decrement:
        const decValue = state - action.payload.amount;
        return decValue;
    case ScoreActionTypes.Reset:
        return initialState;
    case ScoreActionTypes.Set:
        return action.payload.value;
    default:
        return state;
  }
}
