export const ActionTypes = {
  TOGGLE_STYLE: type('TOGGLE_STYLE'),
};

export class ToggleHomepage implements Action {
  type = ActionTypes.TOGGLE_STYLE;

  constructor(payload: {someProperty:string, someOtherProperty:boolean}) { }
}

export type Actions =
  ToggleStyle;