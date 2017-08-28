import {ActionReducer, Action, State} from '@ngrx/store'; 


export const toggleStyle = (state = false, {type, payload}) => {
	switch (type) {
		case "TOGGLE_STYLE":
			let newState = state
			newState = payload
			return newState;
		default:
			return state;
    }
}