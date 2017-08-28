import {ActionReducer, Action, State} from '@ngrx/store'; 


export const setStyle = (state = false, {type, payload}) => {
	switch (type) {
		case "TOGGLE_STYLE":
			// return state;
			console.log(state)
		default:
			return state;
    }
}