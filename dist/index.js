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
		Math.round(window.innerWidth / 3),
		Math.round(window.innerHeight / 3)
	],
	phrase: gotLight,
	ray: {
		gap: 10,
		width: 100
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

const updatePropsWithAction = (state, action, ...props) => {
	let newProps = props.map(name => ({
		[name]: action[name]
	}));

	return Object.assign({}, state, ...newProps);
};

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
			return updatePropsWithAction(state, action, "gap");

		case RESIZE_RAY:
			return updatePropsWithAction(state, action, "width");

		default:
			return state;
	}
};

const canvas = (state = initialState.canvas, action) => {
	switch (action.type) {
		case RESIZE_STAGE:
			return updatePropsWithAction(state, action, "width", "height");

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

function deepCopy(destination) {
	let source = {};

	for (var property in source) {
		if (typeof source[property] === "object" && source[property] !== null && destination[property]) { 
			deepCopy(destination[property], source[property]);
		} else {
			destination[property] = source[property];
		}
	}

	return destination;
};

const calculateDistanceBetweenCoords = (coordA, coordB) => {
	return Math.sqrt(coordA
		.map((coord, index) => Math.pow(coord - coordB[index], 2))
		.reduce(toSum));
};

const calculateAngleBetweenLineAndXAxis = (coordA, coordB) => {
	let [x, y] = coordA, [xb, yb] = coordB;

	return Math.atan2((yb - y), (xb - x));
};

const translateAndRotateCoord = (coord, distance, rotation) => {
	let [x, y] = coord;

	return [
		x + distance * Math.cos(rotation),
		y + distance * Math.sin(rotation)
	];
};

const calculateRayDistance = (lightSource, coord, width) => {
	let distanceToLightSource = calculateDistanceBetweenCoords(lightSource, coord),
		scale = 1 - (distanceToLightSource / 500); /* 500 may be parameterized */

	return width * Math.max(Math.min(scale, 1), 0);
};

const calculateRayRotation = (lightSource, coord) =>
	calculateAngleBetweenLineAndXAxis(lightSource, coord);

const calculatePhraseWidth = (phrase, gap) => Math.round(1 + gap * phrase[0].length);

const calculatePhraseHeight = (phrase, gap) => Math.round(1 + gap * phrase.length);

const calculatePhraseTopLeftCoord = (canvas, phrase, gap) => {
	let phraseWidth = calculatePhraseWidth(phrase, gap),
		phraseHeight = calculatePhraseHeight(phrase, gap);

	return [
		Math.round((canvas.width - phraseWidth) / 2),
		Math.round((canvas.height - phraseHeight) / 2)
	];
};

const calculatePhraseCoord = (xStart, yStart, xIndex, yIndex, gap) => [Math.round(xIndex * gap + xStart), Math.round(yIndex * gap + yStart)];

const calculatePhraseVisibleCoordsInLine = (line, lineIndex, xStart, yStart, gap) => {
	return line
		.map((dot, dotIndex) =>
			!!dot ? calculatePhraseCoord(xStart, yStart, dotIndex, lineIndex, gap) : null)
		.filter(coord => coord != null);
};

const calculatePhraseVisibleCoords = (canvas, phrase, gap) => {
	let [xStart, yStart] = calculatePhraseTopLeftCoord(canvas, phrase, gap);

	return phrase
		.map((line, lineIndex) =>
			calculatePhraseVisibleCoordsInLine(line, lineIndex, xStart, yStart, gap))
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
			visibleCoords = calculatePhraseVisibleCoords(canvas, phrase, ray.gap);

		if (lastState.canvas == null || state.canvas.width !== lastState.canvas.width) {
			element.setAttribute("width", state.canvas.width);
		}

		if (lastState.canvas == null || state.canvas.height !== lastState.canvas.height) {
			element.setAttribute("height", state.canvas.height);
		}

		context.clearRect(0, 0, state.canvas.width, state.canvas.height);

		visibleCoords.forEach(coord => {
			let distance = calculateRayDistance(lightSource, coord, state.ray.width),
				rotation = calculateRayRotation(lightSource, coord);

			let [x1, y1] = coord, [x2, y2] = translateAndRotateCoord(coord, distance, rotation - 0.05), /* 0.05 may be parameterized */ [x3, y3] = translateAndRotateCoord(coord, distance, rotation + 0.05); /* 0.05 may be parameterized */

			context.fillStyle = '#f1f1f1';
			context.beginPath();
			context.moveTo(x1, y1);
			context.lineTo(x2, y2);
			context.lineTo(x3, y3);
			context.closePath();
			context.fill();
		});

		lastState = deepCopy(state);
	};
};

const parentElement = document.getElementById("root");

window.addEventListener("resize", evt =>
	store.dispatch(resizeStage(window.innerWidth, window.innerHeight)));

parentElement.addEventListener("mousemove", evt =>
	store.dispatch(updateLightSource(evt.clientX, evt.clientY)));

store.subscribe(render(parentElement));
store.dispatch(resizeStage(window.innerWidth, window.innerHeight));
