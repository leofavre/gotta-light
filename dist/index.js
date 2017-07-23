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
	animation: "pointer",
	canvas: {
		height: window.innerHeight,
		width: window.innerWidth
	},
	light: {
		coord: [
			Math.round(window.innerWidth / 3),
			Math.round(window.innerHeight / 3)
		],
		reach: 5
	},
	phrase: {
		gap: 9,
		source: gotLight
	},
	ray: {
		aperture: 12,
		reach: 80,
	}
};

const CHANGE_ANIMATION_TYPE = "CHANGE_ANIMATION_TYPE";
const RESIZE_CANVAS = "RESIZE_CANVAS";
const UPDATE_LIGHT_COORD = "UPDATE_LIGHT_COORD";
const UPDATE_LIGHT_REACH = "UPDATE_LIGHT_REACH";
const UPDATE_PHRASE_GAP = "UPDATE_PHRASE_GAP";
const UPDATE_PHRASE_SOURCE = "UPDATE_PHRASE_SOURCE";
const RESIZE_RAY = "RESIZE_RAY";

const updateLightSourceCoord = (x, y) => ({
	type: UPDATE_LIGHT_COORD,
	coord: [x, y]
});

const updateLightSourceReach = reach => ({
	type: UPDATE_LIGHT_REACH,
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

const animation = (state = initialState.animation, action) => {
	switch (action.type) {
		case CHANGE_ANIMATION_TYPE:
			return action.type;

		default:
			return state;
	}
};

const canvas = (state = initialState.canvas, action) => {
	switch (action.type) {
		case RESIZE_CANVAS:
			return updatePropsToAction(state, action, "height", "width");

		default:
			return state;
	}
};

const light = (state = initialState.light, action) => {
	switch (action.type) {
		case UPDATE_LIGHT_COORD:
			return updatePropsToAction(state, action, "coord");

		default:
			return state;
	}
};

const phrase = (state = initialState.phrase, action) => {
	switch (action.type) {
		case UPDATE_PHRASE_SOURCE:
			return updatePropsToAction(state, action, "source");

		case UPDATE_PHRASE_GAP:
			return updatePropsToAction(state, action, "gap");

		default:
			return state;
	}
};

const ray = (state = initialState.ray, action) => {
	switch (action.type) {
		case RESIZE_RAY:
			return updatePropsToAction(state, action, "aperture", "reach");

		default:
			return state;
	}
};

const app = Redux.combineReducers({
	light,
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

class Ray {
	static calculateDistance(lightReach, lightCoord, rayReach, rayCoord) {
		let distanceToLightSource = calculateDistanceBetweenCoords(lightCoord, rayCoord),
		scale = 1 - (distanceToLightSource / (lightReach * rayReach));
		return rayReach * Math.max(Math.min(scale, 1), 0);
	}

	static calculateRotation(lightCoord, rayCoord) {
		return calculateAngleBetweenLineAndXAxis(lightCoord, rayCoord);
	}
}

class Phrase {
	static _calculateWidth(source, gap) {
		return Math.round(1 + gap * source[0].length);
	}

	static _calculateHeight(source, gap) {
		return Math.round(1 + gap * source.length);
	}

	static _calculateInitialCoord(canvas, source, gap) {
		let phraseWidth = this._calculateWidth(source, gap),
			phraseHeight = this._calculateHeight(source, gap);

		return [
			Math.round((canvas.width - phraseWidth) / 2),
			Math.round((canvas.height - phraseHeight) / 2)
		];
	};

	static _calculateCoord(xStart, yStart, xIndex, yIndex, gap) {
		return [
			Math.round(xIndex * gap + xStart),
			Math.round(yIndex * gap + yStart)
		];
	}

	static _calculateVisibleCoordsInLine(line, lineIndex, xStart, yStart, gap) {
		return line
			.map((dot, dotIndex) =>
				!!dot ? this._calculateCoord(xStart, yStart, dotIndex, lineIndex, gap) : null)
			.filter(rayCoord => rayCoord != null);
	};

	static calculateVisibleCoords(canvas, source, gap) {
		let [xStart, yStart] = this._calculateInitialCoord(canvas, source, gap);

		return source
			.map((line, lineIndex) =>
				this._calculateVisibleCoordsInLine(line, lineIndex, xStart, yStart, gap))
			.reduce(toFlatten);
	};
}

const render = parentElement => {
	parentElement.innerHTML = `<canvas></canvas>`;
	const element = parentElement.children[0];
	const context = element.getContext('2d');

	return () => {
		let state = store.getState(),
			{ light, phrase, ray, canvas } = state,
			visibleCoords = Phrase.calculateVisibleCoords(canvas, phrase.source, phrase.gap);

		updateCanvasDimensions(element, canvas.width, canvas.height);
		cleanUpCanvas(context, canvas.width, canvas.height);

		visibleCoords.forEach(rayCoord =>
			drawRay(context, light.reach, light.coord, ray.reach, rayCoord, ray.aperture));
	};
};

const updateCanvasDimensions = (element, width, height) => {
	element.setAttribute("width", width);
	element.setAttribute("height", height);
};

const cleanUpCanvas = (context, width, height) => {
	context.clearRect(0, 0, width, height);
};

const drawRay = (context, lightReach, lightCoord, rayReach, rayCoord, rayAperture) => {
	let distance = Ray.calculateDistance(lightReach, lightCoord, rayReach, rayCoord),
		rotationInRadians = Ray.calculateRotation(lightCoord, rayCoord);

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
