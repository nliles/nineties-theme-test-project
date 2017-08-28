export const ActionTypes = {
  TOGGLE_STYLE: type('TOGGLE_STYLE'),
};

export class ToggleHomepage implements Action {
  type = ActionTypes.TOGGLE_STYLE;

  constructor(payload: {someProperty:"TOGGLE_STYLE", showNinetiesStyle:boolean}) { }
}

export type Actions =
  toggleStyle(showNinetiesStyle);