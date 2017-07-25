import { initialState } from "../../data/initialState";
import { UPDATE_LIGHT_COORD, UPDATE_LIGHT_REACH } from "./constants";

export const light = (state = initialState.light, action) => {
	switch (action.type) {
		case UPDATE_LIGHT_COORD:
			return updatePropsToAction(state, action, "coord");

		case UPDATE_LIGHT_REACH:
			return updatePropsToAction(state, action, "reach");

		default:
			return state;
	}
};