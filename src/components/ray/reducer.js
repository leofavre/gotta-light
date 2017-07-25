import { initialState } from "../../data/initialState";
import { updatePropsToAction } from "../../helpers/index";
import { UPDATE_RAY_APERTURE, UPDATE_RAY_REACH } from "./constants";

export const ray = (state = initialState.ray, action) => {
	switch (action.type) {
		case UPDATE_RAY_APERTURE:
			return updatePropsToAction(state, action, "aperture");

		case UPDATE_RAY_REACH:
			return updatePropsToAction(state, action, "reach");

		default:
			return state;
	}
};