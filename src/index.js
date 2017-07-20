import { createStore } from "redux";

const stage = (state, action) => {
	if (action.type === "RESIZE_STAGE") {
		return {
			width: action.width,
			height: action.height
		};
	}
	return state;
};