import { initialState } from "../../data/initialState";
import { updatePropsToAction } from "../../helpers/index";
import { UPDATE_PHRASE_GAP, UPDATE_PHRASE_SOURCE } from "./constants";

export const phrase = (state = initialState.phrase, action) => {
	switch (action.type) {
		case UPDATE_PHRASE_GAP:
			return updatePropsToAction(state, action, "gap");

		case UPDATE_PHRASE_SOURCE:
			return updatePropsToAction(state, action, "source");

		default:
			return state;
	}
};