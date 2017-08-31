
import {ActionReducer, Action, State} from '@ngrx/store';
export const toggleStyle = (state = false, action) => {
	let  {type, payload} = action;
	switch (type) {
		case "TOGGLE_STYLE":
			let newState = !state
			return newState;
		default:
			return state;
    }
}
