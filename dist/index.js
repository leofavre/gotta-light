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
	lightSource: {
		coord: [
			Math.round(window.innerWidth / 3),
			Math.round(window.innerHeight / 3)
		],
		reach: 5
	},
	phrase: gotLight,
	ray: {
		gap: 9,
		maxDistance: 80,
		aperture: 12
	}
};

const UPDATE_ANIMATION_TYPE = "CHANGE_ANIMATION_TYPE";
const UPDATE_LIGHT_SOURCE_COORD = "UPDATE_LIGHT_SOURCE_COORD";
const UPDATE_LIGHT_SOURCE_REACH = "UPDATE_LIGHT_SOURCE_REACH";
const UPDATE_PHRASE = "UPDATE_PHRASE";
const UPDATE_RAY_GAP = "UPDATE_RAY_GAP";
const RESIZE_RAY = "RESIZE_RAY";
const RESIZE_CANVAS = "RESIZE_CANVAS";

const updateLightSourceCoord = (x, y) => ({
	type: UPDATE_LIGHT_SOURCE_COORD,
	coord: [x, y]
});

const updateLightSourceReach = reach => ({
	type: UPDATE_LIGHT_SOURCE_REACH,
	reach
});

const resizeCanvas = (width, height) => ({
	type: RESIZE_CANVAS,
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
		case UPDATE_LIGHT_SOURCE_COORD:
			return updatePropsToAction(state, action, "coord");

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
		case RESIZE_CANVAS:
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

const calculateRayDistance = (lightSourceReach, lightSourceCoord, rayCoord, rayMaxDistance) => {
	let distanceToLightSource = calculateDistanceBetweenCoords(lightSourceCoord, rayCoord),
		scale = 1 - (distanceToLightSource / (lightSourceReach * rayMaxDistance));

	return rayMaxDistance * Math.max(Math.min(scale, 1), 0);
};

const calculateRayRotation = (lightSourceCoord, rayCoord) =>
	calculateAngleBetweenLineAndXAxis(lightSourceCoord, rayCoord);

const calculatePhraseWidth = (phrase, gap) => Math.round(1 + gap * phrase[0].length);

const calculatePhraseHeight = (phrase, gap) => Math.round(1 + gap * phrase.length);

const calculateTopLeftRayCoord = (canvas, phrase, gap) => {
	let phraseWidth = calculatePhraseWidth(phrase, gap),
		phraseHeight = calculatePhraseHeight(phrase, gap);

	return [
		Math.round((canvas.width - phraseWidth) / 2),
		Math.round((canvas.height - phraseHeight) / 2)
	];
};

const calculateRayCoord = (xStart, yStart, xIndex, yIndex, gap) => [Math.round(xIndex * gap + xStart), Math.round(yIndex * gap + yStart)];

const calculateVisibleRaysCoordsInLine = (line, lineIndex, xStart, yStart, gap) => {
	return line
		.map((dot, dotIndex) =>
			!!dot ? calculateRayCoord(xStart, yStart, dotIndex, lineIndex, gap) : null)
		.filter(rayCoord => rayCoord != null);
};

const calculateVisibleRayCoords = (canvas, phrase, gap) => {
	let [xStart, yStart] = calculateTopLeftRayCoord(canvas, phrase, gap);

	return phrase
		.map((line, lineIndex) =>
			calculateVisibleRaysCoordsInLine(line, lineIndex, xStart, yStart, gap))
		.reduce(toFlatten);
};

const render = parentElement => {
	parentElement.innerHTML = `<canvas></canvas>`;
	const element = parentElement.children[0];
	const context = element.getContext('2d');

	return () => {
		let state = store.getState(),
			{ lightSource, phrase, ray, canvas } = state,
			visibleCoords = calculateVisibleRayCoords(canvas, phrase, ray.gap);

		updateCanvasSize(element, canvas.width, canvas.height);
		cleanUpCanvas(context, canvas.width, canvas.height);

		visibleCoords.forEach(rayCoord =>
			drawRay(context, lightSource.reach, lightSource.coord, rayCoord, ray.maxDistance, ray.aperture));
	};
};

const updateCanvasSize = (element, width, height) => {
	element.setAttribute("width", width);
	element.setAttribute("height", height);
};

const cleanUpCanvas = (context, width, height) => {
	context.clearRect(0, 0, width, height);
};

const drawRay = (context, lightSourceReach, lightSourceCoord, rayCoord, rayMaxDistance, rayAperture) => {
	let distance = calculateRayDistance(lightSourceReach, lightSourceCoord, rayCoord, rayMaxDistance),
		rotationInRadians = calculateRayRotation(lightSourceCoord, rayCoord);

	let apertureInRadians = rayAperture * Math.PI / 180,
		angle1 = rotationInRadians - apertureInRadians / 2,
		angle2 = rotationInRadians + apertureInRadians / 2;

	let [x1, y1] = rayCoord,
		[x2, y2] = translateAndRotateCoord(rayCoord, distance, angle1);

	let grd = context.createRadialGradient(x1, y1, 0, x1, y1, distance);
	grd.addColorStop(0, "rgba(255, 255, 255, 0.5)");
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
	store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight)));

parentElement.addEventListener("mousemove", evt =>
	store.dispatch(updateLightSourceCoord(evt.clientX, evt.clientY)));

store.subscribe(render(parentElement));
store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight));
