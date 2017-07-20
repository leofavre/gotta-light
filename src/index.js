import createStore from "redux/es/createStore";

var initialStageDimensions = {
	width: document.body.clientWidth,
	height: document.body.clientHeight
};

const stage = (state = initialStageDimensions, action) => {
	if (action.type === "RESIZE_STAGE") {
		return {
			width: action.width,
			height: action.height
		};
	}
	return state;
};

const store = createStore(stage);