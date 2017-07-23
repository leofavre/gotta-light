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
		maxDistance: 100,
		aperture: 8
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

const updatePropsToAction = (state, action, ...props) => {
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
			return updatePropsToAction(state, action, "gap");

		case RESIZE_RAY:
			return updatePropsToAction(state, action, "maxDistance", "aperture");

		default:
			return state;
	}
};

const canvas = (state = initialState.canvas, action) => {
	switch (action.type) {
		case RESIZE_STAGE:
			return updatePropsToAction(state, action, "width", "height");

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

	return () => {
		let state = store.getState(),
			{ lightSource, phrase, ray, canvas } = state,
			visibleCoords = calculatePhraseVisibleCoords(canvas, phrase, ray.gap);

		updateCanvasSize(element, canvas.width, canvas.height);
		cleanUpCanvas(context, canvas.width, canvas.height);

		visibleCoords.forEach(coord =>
			drawRay(context, lightSource, coord, ray.maxDistance, ray.aperture));
	};
};

const updateCanvasSize = (element, width, height) => {
	element.setAttribute("width", width);
	element.setAttribute("height", height);
};

const cleanUpCanvas = (context, width, height) => {
	context.clearRect(0, 0, width, height);
};

const drawRay = (context, lightSource, coord, rayMaxDistance, rayAperture) => {
	let distance = calculateRayDistance(lightSource, coord, rayMaxDistance),
		rotationInRadians = calculateRayRotation(lightSource, coord);

	let apertureInRadians = rayAperture * Math.PI / 180,
		angle1 = rotationInRadians - apertureInRadians / 2,
		angle2 = rotationInRadians + apertureInRadians / 2;

	let [x1, y1] = coord,
		[x2, y2] = translateAndRotateCoord(coord, distance, angle1);

	let grd = context.createRadialGradient(x1, y1, 0, x1, y1, distance);
	grd.addColorStop(0, "rgba(255, 255, 255, 0.4)");
	grd.addColorStop(1, "rgba(255, 255, 255, 0)");

	context.fillStyle = grd;
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.arc(x1, y1, distance, angle1, angle2);
	context.closePath();
	context.fill();
};

const parentElement = document.getElementById("root");

window.addEventListener("resize", evt =>
	store.dispatch(resizeStage(window.innerWidth, window.innerHeight)));

parentElement.addEventListener("mousemove", evt =>
	store.dispatch(updateLightSource(evt.clientX, evt.clientY)));

store.subscribe(render(parentElement));
store.dispatch(resizeStage(window.innerWidth, window.innerHeight));
