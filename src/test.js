import createStore from "redux/es/createStore";

const initialState = {
	lightSource: [0, 0],
	phrase: [
		[]
	],
	ray: {
		gap: 8,
		width: 50,
		height: 4
	},
	stage: {
		width: 800,
		height: 600
	},
};

const updateGap = (state, action) => ({
	...state,
	gap: action.gap
});

const updateSize = (state, action) => ({
	...state,
	width: action.width,
	height: action.height
});

const lightSource = (state = initialState.lightSource, action) => {
	switch (action.type) {
		case "UPDATE_LIGHT_SOURCE":
			return action.coords;

		default:
			return state;
	}
};

const phrase = (state = initialState.phrase, action) => {
	switch (action.type) {
		case "UPDATE_PHRASE":
			return action.source;

		default:
			return state;
	}
};

const ray = (state = initialState.ray, action) => {
	switch (action.type) {
		case "UPDATE_RAY_GAP":
			return updateGap(state, action);

		case "RESIZE_RAY":
			return updateSize(state, action);

		default:
			return state;
	}
};

const stage = (state = initialState.stage, action) => {
	switch (action.type) {
		case "RESIZE_STAGE":
			return updateSize(state, action);

		default:
			return state;
	}
};

const app = (state, action) => {
	return {
		lightSource: lightSource(state.lightSource, action),
		phrase: phrase(state.phrase, action),
		ray: ray(state.ray, action),
		state: state(state.state, action)
	};
};

const store = createStore(app);

const calculatePhraseWidthInPixels = (phrase, ray) => 1 + ray.gap * phrase[0].length;

const calculatePhraseHeightInPixels = (phrase, ray) => 1 + ray.gap * phrase.length;

const render = state => {
	const { lightSource, phrase, ray, stage } = state;

	let phraseWidth = calculatePhraseWidthInPixels(phrase, ray),
		phraseHeight = calculatePhraseHeightInPixels(phrase, ray);

	phrase.forEach((line, lineIndex) => {
		line.forEach((dot, dotIndex) => {

		});
	});
};