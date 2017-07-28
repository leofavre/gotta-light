import { initialState } from "../../data/initialState";
import { updateProps, updatePropsToAction } from "../../helpers/index";
import { TOGGLE_LIGHT_AUTOMATIC_MOVEMENT, UPDATE_LIGHT_COORD, UPDATE_LIGHT_REACH } from "./constants";

export const light = (state = initialState.light, action) => {
	switch (action.type) {
		case TOGGLE_LIGHT_AUTOMATIC_MOVEMENT:
			return updateProps(state, { autoMove: !state.autoMove });

		case UPDATE_LIGHT_COORD:
			return updatePropsToAction(state, action, "coord");

		case UPDATE_LIGHT_REACH:
			return updatePropsToAction(state, action, "reach");

		default:
			return state;
	}
};