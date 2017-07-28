import { initialState } from "../../data/initialState";
import { updateProps, updatePropsToAction } from "../../helpers/index";

import {
	TOGGLE_LIGHT_AUTOMATIC_MOVEMENT,
	TOGGLE_LIGHT_ORIGIN,
	UPDATE_LIGHT_COORD,
	UPDATE_LIGHT_REACH,
	UPDATE_LIGHT_X_INCREMENT,
	UPDATE_LIGHT_Y_INCREMENT
} from "./constants";

export const light = (state = initialState.light, action) => {
	switch (action.type) {
		case TOGGLE_LIGHT_AUTOMATIC_MOVEMENT:
			return updateProps(state, { autoMove: !state.autoMove });

		case TOGGLE_LIGHT_ORIGIN:
			return updatePropsToAction(state, action, "showOrigin");

		case UPDATE_LIGHT_COORD:
			return updatePropsToAction(state, action, "coord");

		case UPDATE_LIGHT_REACH:
			return updatePropsToAction(state, action, "reach");

		case UPDATE_LIGHT_X_INCREMENT:
			return updatePropsToAction(state, action, "xIncrement");

		case UPDATE_LIGHT_Y_INCREMENT:
			return updatePropsToAction(state, action, "yIncrement");

		default:
			return state;
	}
};