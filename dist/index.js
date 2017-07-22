const gotLight = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	[1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
	[1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
	[1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
	[0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const initialState = {
	canvas: {
		width: window.innerWidth,
		height: window.innerHeight
	},
	lightSource: [
		Math.round(window.innerWidth / 2),
		Math.round(window.innerHeight / 2)
	],
	phrase: gotLight,
	ray: {
		gap: 8,
		width: 50,
		height: 4
	}
};

const UPDATE_LIGHT_SOURCE = "UPDATE_LIGHT_SOURCE";
const UPDATE_PHRASE = "UPDATE_PHRASE";
const UPDATE_RAY_GAP = "UPDATE_RAY_GAP";
const RESIZE_RAY = "RESIZE_RAY";
const RESIZE_STAGE = "RESIZE_STAGE";

const updateLightSource = (x, y) => ({
	type: UPDATE_LIGHT_SOURCE,
	coords: [x, y]
});

const resizeStage = (width, height) => ({
	type: RESIZE_STAGE,
	width,
	height
});

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
		case UPDATE_LIGHT_SOURCE:
			return action.coords;

		default:
			return state;
	}
};

const phrase = (state = initialState.phrase, action) => {
	switch (action.type) {
		case UPDATE_PHRASE:
			return action.source;

		default:
			return state;
	}
};

const ray = (state = initialState.ray, action) => {
	switch (action.type) {
		case UPDATE_RAY_GAP:
			return updateGap(state, action);

		case RESIZE_RAY:
			return updateSize(state, action);

		default:
			return state;
	}
};

const canvas = (state = initialState.canvas, action) => {
	switch (action.type) {
		case RESIZE_STAGE:
			return updateSize(state, action);

		default:
			return state;
	}
};

const app = Redux.combineReducers({
	lightSource,
	phrase,
	ray,
	canvas
});

const store = Redux.createStore(app, initialState);

const toFlatten = (prevArr, nextArr) => prevArr.concat(nextArr);

const toSum = (prevNum, nextNum) => prevNum + nextNum;

const calculateDistanceBetweenCoords = (coordA, coordB) => {
	return Math.sqrt(coordA
		.map((coord, index) => Math.pow(coord - coordB[index], 2))
		.reduce(toSum));
};

const calculateRayScaleInPercent = (lightSource, coord) => {
	let distanceToLightSource = calculateDistanceBetweenCoords(lightSource, coord),
		scale = 1 - (distanceToLightSource / 500);

	// TO DO: change this '500' value to something parameterized?

	return Math.max(Math.min(scale, 1), 0);
};

const calculateRayRotationInDegrees = (lightSource, coord) => {
	let relX = (lightSource[0] - coord[0]) * -1,
		relY = (lightSource[1] - coord[1]) * -1,
		dist = calculateDistanceBetweenCoords(lightSource, coord);

	let k = (relY < 0) ? -1 : 1;

	return k * Math.acos(relX / dist) * 180 / Math.PI;
};

const calculatePhraseWidthInPixels = (phrase, gap) => Math.round(1 + gap * phrase[0].length);

const calculatePhraseHeightInPixels = (phrase, gap) => Math.round(1 + gap * phrase.length);

const calculateTopLeftCoord = (canvas, phrase, gap) => {
	let phraseWidth = calculatePhraseWidthInPixels(phrase, gap),
		phraseHeight = calculatePhraseHeightInPixels(phrase, gap);

	return [
		Math.round((canvas.width - phraseWidth) / 2),
		Math.round((canvas.height - phraseHeight) / 2)
	];
};

const calculateCoord = (xStart, yStart, xIndex, yIndex, gap) => [Math.round(xIndex * gap + xStart), Math.round(yIndex * gap + yStart)];

const calculateVisibleCoordsInLine = (line, lineIndex, xStart, yStart, gap) => {
	return line
		.map((dot, dotIndex) =>
			!!dot ? calculateCoord(xStart, yStart, dotIndex, lineIndex, gap) : null)
		.filter(coord => coord != null);
};

const calculateVisibleCoords = (canvas, phrase, gap) => {
	let [xStart, yStart] = calculateTopLeftCoord(canvas, phrase, gap);

	return phrase
		.map((line, lineIndex) =>
			calculateVisibleCoordsInLine(line, lineIndex, xStart, yStart, gap))
		.reduce(toFlatten);
};

const render = parentElement => {
	parentElement.innerHTML = `<canvas></canvas>`;
	const element = parentElement.children[0];
	const context = element.getContext('2d');

	let lastState = {};

	return () => {
		let state = store.getState(),
			{ lightSource, phrase, ray, canvas } = state,
			visibleCoords = calculateVisibleCoords(canvas, phrase, ray.gap);

		if (lastState.canvas == null || state.canvas.width !== lastState.canvas.width) {
			element.setAttribute("width", state.canvas.width);
		}

		if (lastState.canvas == null || state.canvas.height !== lastState.canvas.height) {
			element.setAttribute("height", state.canvas.height);
		}

		context.clearRect(0, 0, state.canvas.width, state.canvas.height);

		visibleCoords.forEach(coord => {
			let [x, y] = coord;

			context.beginPath();
			context.moveTo(x, y);
			context.lineTo(x + 25, y + 5);
			context.lineWidth = 1;
			context.strokeStyle = '#ff0000';
			context.stroke();

			/*
			return {
				x,
				y,
				scale: calculateRayScaleInPercent(lightSource, coord),
				rotate: calculateRayRotationInDegrees(lightSource, coord)
			};
			*/
		});
	
		lastState = {
			...state,
			canvas: { ...state.canvas },
			lightSource: { ...state.lightSource },
			phrase: { ...state.phrase },
			ray: { ...state.ray }
		};
	};
};

window.addEventListener("resize", evt =>
	store.dispatch(resizeStage(window.innerWidth, window.innerHeight)));

document.addEventListener("mousemove", evt =>
	store.dispatch(updateLightSource(evt.clientX, evt.clientY)));

const parentElement = document.getElementById("root");

store.subscribe(render(parentElement));
store.dispatch(resizeStage(window.innerWidth, window.innerHeight));
