import { initialState } from "../../data/initialState";
import { updatePropsToAction } from "../../helpers/index";
import { RESIZE_CANVAS } from "./constants";

export const canvas = (state = initialState.canvas, action) => {
	switch (action.type) {
		case RESIZE_CANVAS:
			return updatePropsToAction(state, action, "height", "width");

		default:
			return state;
	}
};