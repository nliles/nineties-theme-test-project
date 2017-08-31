
import {ActionReducer, Action, State} from '@ngrx/store';
import { TOGGLE_STYLE } from "./../actions/style.action";

export function toggleStyle(state = false, action) {
	let  {type, payload} = action;
	switch (type) {
		case "TOGGLE_STYLE":
			let newState = !state
			return newState;
		default:
			return state;
    }
}




