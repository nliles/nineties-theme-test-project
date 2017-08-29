import {ActionReducer, Action, State} from '@ngrx/store'; 


export const toggleStyle = (state = false, {type, payload}) => {
	switch (type) {
		case "TOGGLE_STYLE":
			payload = !state;
			return payload;
		default:
			return state;
    }
} 