// export const TOGGLE_STYLE:string = "TOGGLE_STYLE";

import {ActionReducer, Action, State} from '@ngrx/store'; 


export const ActionTypes = {
  TOGGLE_STYLE: type('TOGGLE_STYLE'),
};

export class toggleStyle implements Action {
  type = ActionTypes.TOGGLE_STYLE;

  constructor(payload: {type:"TOGGLE_STYLE", payload:boolean}) { }
}

export type Actions =
  toggleStyle(theme);
