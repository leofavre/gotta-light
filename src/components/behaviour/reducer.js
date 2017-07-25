import { initialState } from "../../data/initialState";
import { TOGGLE_BEHAVIOUR } from "./constants";

export const behaviour = (state = initialState.behaviour, action) => {
	switch (action.type) {
		case TOGGLE_BEHAVIOUR:
			return !state;

		default:
			return state;
	}
};