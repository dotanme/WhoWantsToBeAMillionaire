// score state actions

import { Action } from '@ngrx/store';

export enum ScoreActionTypes {
  Increment = '[Score] Increment',
  Decrement = '[Score] Decrement',
  Set = '[Score] Set',
  Reset = '[Score] Reset'
}

export class Increment implements Action {
  readonly type = ScoreActionTypes.Increment;

  constructor(public payload: { amount: number }) {}
}

export class Decrement implements Action {
  readonly type = ScoreActionTypes.Decrement;

  constructor(public payload: { amount: number }) {}
}

export class Set implements Action {
  readonly type = ScoreActionTypes.Set;

  constructor(public payload: { value: number }) {}
}

export class Reset implements Action {
  readonly type = ScoreActionTypes.Reset;
}

export type ScoreActions = Increment | Decrement | Set | Reset;
