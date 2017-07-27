/*********************************************
 *                                           *
 *  Gotta Light?                             *
 *                                           *
 *  -> click to control the animation        *
 *  -> click again for automatic animation.  *
 *                                           *
 *  http://leofavre.com                      *
 *  https://github.com/leofavre/gotta-light  *
 *                                           *
 *********************************************/

const gottaLight = [
	"                                                   111  111           111                 11111  ",
	"                      111     111                  111  111           111        111     1111111 ",
	"                      111     111                  111  111           111        111    111111111",
	"  111 111   111111    111     111      111111      111        111 111 111 111    111    111  1111",
	" 11111111  11111111  1111111 1111111  11111111     111  111  11111111 11111111  1111111  1    111",
	"1111 1111 1111  1111 1111111 1111111 111   1111    111  111 1111 1111 11111111  1111111       111",
	"111   111 111    111 1111111 1111111        111    111  111 111   111 111111111 1111111     1111 ",
	"111   111 111    111  111     111       1111111    111  111 111   111 111   111  111       1111  ",
	"111   111 111    111  111     111     111111111    111  111 111   111 111   111  111      1111   ",
	"1111 1111 111    111  111     111    1111   111    111  111 1111 1111 111   111  111      111    ",
	"111111111 111    111  111     111    111    111    111  111 111111111 111   111  111             ",
	" 1111 111 1111  1111  111  11 111  111111  1111    111  111  1111 111 111   111  111  11  1111   ",
	"      111  11111111   1111111 1111111 111111111    111  111       111 111   111  1111111  1111   ",
	" 11   111   111111     11111   11111   1111 111    111  111  11   111 111   111   11111   1111   ",
	" 11111111                                                    11111111                            ",
	"  111111                                                      111111                             "
];

const processPhraseData = arr =>
	arr.map(str => Array.from(str).map(value => parseInt(value) || 0));

const initialState = {
	canvas: {
		height: window.innerHeight,
		width: window.innerWidth
	},
	light: {
		autoMove: true,
		coord: [
			Math.round(window.innerWidth / 3),
			Math.round(window.innerHeight / 3)
		],
		reach: 5,
	},
	phrase: {
		gap: 9,
		source: processPhraseData(gottaLight)
	},
	ray: {
		aperture: 12,
		reach: 80
	}
};

const degToRad = angle => angle * (Math.PI / 180);

const toFlatten = (prevArr, nextArr) => prevArr.concat(nextArr);

const toSum = (prevNum, nextNum) => prevNum + nextNum;

const parsePath = path => Array.isArray(path) ? path : `${path}`.split(".");

const simpleAt = (obj, path) => {
	return parsePath(path).reduce((obj, key) => {
		return (obj != null && obj.hasOwnProperty(key)) ? obj[key] : undefined;
	}, obj);
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

const pendularEasing = num => {
	if (num % 90 === 0 && num % 180 !== 0) {
		return 0.5 + 0;
	}

	return 0.5 + (Math.cos(degToRad(num % 360)) / 2);
};

const updateProps = (state, ...objs) => Object.assign({}, state, ...objs);

const updatePropsToAction = (state, action, ...props) => {
	let newProps = props.map(name => ({
		[name]: action[name]
	}));

	return updateProps(state, ...newProps);
};

const RESIZE_CANVAS = "RESIZE_CANVAS";

const canvas = (state = initialState.canvas, action) => {
	switch (action.type) {
		case RESIZE_CANVAS:
			return updatePropsToAction(state, action, "height", "width");

		default:
			return state;
	}
};

const TOGGLE_LIGHT_AUTOMATIC_MOVEMENT = "TOGGLE_LIGHT_AUTOMATIC_MOVEMENT";
const UPDATE_LIGHT_COORD = "UPDATE_LIGHT_COORD";
const UPDATE_LIGHT_REACH = "UPDATE_LIGHT_REACH";

const light = (state = initialState.light, action) => {
	switch (action.type) {
		case TOGGLE_LIGHT_AUTOMATIC_MOVEMENT:
			return updateProps(state, { autoMove: !state.autoMove });

		case UPDATE_LIGHT_COORD:
			return updatePropsToAction(state, action, "coord");

		case UPDATE_LIGHT_REACH:
			return updatePropsToAction(state, action, "reach");

		default:
			return state;
	}
};

const UPDATE_PHRASE_GAP = "UPDATE_PHRASE_GAP";
const UPDATE_PHRASE_SOURCE = "UPDATE_PHRASE_SOURCE";

const phrase = (state = initialState.phrase, action) => {
	switch (action.type) {
		case UPDATE_PHRASE_GAP:
			return updatePropsToAction(state, action, "gap");

		case UPDATE_PHRASE_SOURCE:
			return updatePropsToAction(state, action, "source");

		default:
			return state;
	}
};

const UPDATE_RAY_APERTURE = "UPDATE_RAY_APERTURE";
const UPDATE_RAY_REACH = "UPDATE_RAY_REACH";

const ray = (state = initialState.ray, action) => {
	switch (action.type) {
		case UPDATE_RAY_APERTURE:
			return updatePropsToAction(state, action, "aperture");

		case UPDATE_RAY_REACH:
			return updatePropsToAction(state, action, "reach");

		default:
			return state;
	}
};

const app = Redux.combineReducers({
	canvas,
	light,
	phrase,
	ray
});

const store = Redux.createStore(app, initialState);

const toggleLightAutomaticMovement = () => ({
	type: TOGGLE_LIGHT_AUTOMATIC_MOVEMENT
});

const updateLightCoord = (x, y) => ({
	type: UPDATE_LIGHT_COORD,
	coord: [x, y]
});

const updateLightReach = reach => ({
	type: UPDATE_LIGHT_REACH,
	reach
});

const updatePhraseGap = gap => ({
	type: UPDATE_PHRASE_GAP,
	gap
});

const updateRayAperture = aperture => ({
	type: UPDATE_RAY_APERTURE,
	aperture
});

const updateRayReach = reach => ({
	type: UPDATE_RAY_REACH,
	reach
});

const resizeCanvas = (width, height) => ({
	type: RESIZE_CANVAS,
	width,
	height
});

const RayView = (function() {
	const render = (context, rayCoord, translatedCoord, arcDefinition) => {
		let [x1, y1] = rayCoord,
			[x2, y2] = translatedCoord,
			[radius, angle1, angle2] = arcDefinition;

		let gradient = context.createRadialGradient(x1, y1, 0, x1, y1, radius);
		gradient.addColorStop(0, "rgba(255, 255, 255, 0.5)");
		gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

		context.fillStyle = gradient;
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.arc(x1, y1, radius, angle1, angle2);
		context.closePath();
		context.fill();
	};

	return {
		render
	};
})();

const Ray = (function() {
	const render = (context, rayCoord) => {
		let state = store.getState(),
			{ light, ray } = state;

		let lightReach = light.reach,
			lightCoord = light.coord,
			rayReach = ray.reach,
			rayAperture = ray.aperture;

		let arcDefinition = _calculateArc(lightReach, lightCoord, rayReach, rayCoord, rayAperture),
			[radius, angle] = arcDefinition,
			translatedCoord = translateAndRotateCoord(rayCoord, radius, angle);

		RayView.render(context, rayCoord, translatedCoord, arcDefinition);
	};

	const _calculateArc = (lightReach, lightCoord, rayReach, rayCoord, rayAperture) => {
		let radius = _calculateRadius(lightReach, lightCoord, rayReach, rayCoord),
			rotationInRadians = _calculateRotation(lightCoord, rayCoord),
			apertureInRadians = degToRad(rayAperture),
			angle1 = rotationInRadians - apertureInRadians / 2,
			angle2 = rotationInRadians + apertureInRadians / 2;

		return [radius, angle1, angle2];
	};

	const _calculateRadius = (lightReach, lightCoord, rayReach, rayCoord) => {
		let distanceToLightSource = calculateDistanceBetweenCoords(lightCoord, rayCoord),
			scale = 1 - (distanceToLightSource / (lightReach * rayReach));

		return rayReach * Math.max(Math.min(scale, 1), 0);
	};

	const _calculateRotation = (lightCoord, rayCoord) =>
		calculateAngleBetweenLineAndXAxis(lightCoord, rayCoord);

	return {
		render
	};
})();

const PhraseView = (function() {
	const render = (context, visibleCoords) => {
		visibleCoords.forEach(rayCoord => Ray.render(context, rayCoord));
	};

	return {
		render
	};
})();

const Phrase = (function() {
	const render = (context) => {
		let state = store.getState(),
			{ canvas, phrase } = state,
			visibleCoords = _calculateVisibleCoords(canvas, phrase.source, phrase.gap);

		PhraseView.render(context, visibleCoords);
	};

	const getWidth = (source, gap) => Math.round(1 + gap * source[0].length);

	const getHeight = (source, gap) => Math.round(1 + gap * source.length);

	const _calculateVisibleCoords = (canvas, source, gap) => {
		let [xStart, yStart] = _calculateInitialCoord(canvas, source, gap);

		return source
			.map((line, lineIndex) =>
				_calculateVisibleCoordsByLine(line, lineIndex, xStart, yStart, gap))
			.reduce(toFlatten);
	};

	const _calculateInitialCoord = (canvas, source, gap) => {
		let phraseWidth = getWidth(source, gap),
			phraseHeight = getHeight(source, gap);

		return [
			Math.round((canvas.width - phraseWidth) / 2),
			Math.round((canvas.height - phraseHeight) / 2)
		];
	};

	const _calculateVisibleCoordsByLine = (line, lineIndex, xStart, yStart, gap) => {
		return line
			.map((dot, dotIndex) =>
				!!dot ? _calculateCoord(xStart, yStart, dotIndex, lineIndex, gap) : null)
			.filter(coord => coord != null);
	};

	const _calculateCoord = (xStart, yStart, xIndex, yIndex, gap) => {
		return [
			Math.round(xIndex * gap + xStart),
			Math.round(yIndex * gap + yStart)
		];
	};

	return {
		render,
		getWidth,
		getHeight
	};
})();

const CanvasView = (function() {
	const render = (element, context, canvasWidth, canvasHeight) => {
		_updateDimensions(element, canvasWidth, canvasHeight);
		_cleanUp(context, canvasWidth, canvasHeight);
		Phrase.render(context);
	};

	const _updateDimensions = (element, canvasWidth, canvasHeight) => {
		element.setAttribute("width", canvasWidth);
		element.setAttribute("height", canvasHeight);
	};

	const _cleanUp = (context, canvasWidth, canvasHeight) => {
		context.clearRect(0, 0, canvasWidth, canvasHeight);
	};

	return {
		render
	};
})();

const Canvas = (function() {
	const render = (element, context) => {
		_beforeFirstRender();

		return () => {
			let state = store.getState(),
				{ width, height } = state.canvas;

			CanvasView.render(element, context, width, height);
		};
	};

	const _beforeFirstRender = () =>
		window.addEventListener("resize", evt =>
			store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight)));

	return {
		render
	};
})();

const Ticker = (function() {
	let tickers = {},
		listeners = {
			before: new Map(),
			tick: new Map(),
			after: new Map()
		};

	const add = (id, start, increment, reset) => {
		remove(id);
		_update(id, start, increment, reset);
		return Ticker;
	};

	const remove = id => {
		delete tickers[id];
		return Ticker;
	};

	const on = (evtName, callback) => {
		if (listeners.hasOwnProperty(evtName)) {
			listeners[evtName].set(callback, callback);
		}
		return Ticker;
	};

	const off = (evtName, callback) => {
		if (listeners.hasOwnProperty(evtName)) {
			listeners[evtName].delete(callback);
		}
		return Ticker;
	};

	const _start = () => {
		window.requestAnimationFrame(() => {
			_tick();
			_start();
		});
	};

	const _tick = () => {
		listeners.before.forEach(callback => callback());
		listeners.tick.forEach(callback => callback(_getValues()));
		_incrementAndUpdateTickers();
		listeners.after.forEach(callback => callback());
	};

	const _getValues = () => {
		let result = {};
		Object.keys(tickers).forEach(id => result[id] = tickers[id].value);
		return result;
	};

	const _incrementAndUpdateTickers = () => {
		Object.keys(tickers).forEach(id => _incrementAndUpdateTicker(id, tickers[id]));
	};

	const _incrementAndUpdateTicker = (id, ticker) => {
		let newValue = _increment(ticker),
			{ start, increment, reset } = ticker;

		_update(id, start, increment, reset, newValue);
	};

	const _update = (id, start = 0, increment = 1, reset = arg => arg, value = start) => {
		tickers[id] = { start, increment, reset, value };
	};

	const _increment = ticker => {
		let { increment, reset, value } = ticker;
		value = value + increment;
		value = reset(value);
		return value;
	};

	_start();

	return {
		add,
		remove,
		on,
		off
	};
})();

const Light = (function() {
	let lastState, _handleBefore, _handleTick, _handleAfter;

	const render = (canvasElement, lightElement) => {
		_beforeFirstRender(canvasElement);

		return () => {
			let state = store.getState(),
				{ autoMove } = state.light;

			if (autoMove !== lastState) {
				if (autoMove) {
					_stopFollowingPointer(canvasElement);
					_startAnimation(lightElement);
				}
				else {
					_stopAnimation();
					_startFollowingPointer(canvasElement);
				}
			}

			lastState = autoMove;
		};
	};

	const _startAnimation = element => {
		let state, source, gap, canvas, x, y;

		_handleBefore = () => {
			state = store.getState(), { source, gap } = state.phrase, { width, height } = state.canvas;
		};

		_handleTick = tick => {
			x = _calculateAxisIncrement(tick.x, width, Phrase.getWidth(source, gap));
			y = _calculateAxisIncrement(tick.y, height, Phrase.getHeight(source, gap));
		};

		_handleAfter = () => {
			// element.style.left = `${x}px`;
			// element.style.top = `${y}px`;
			store.dispatch(updateLightCoord(x, y));
		};

		Ticker
			.on("before", _handleBefore)
			.on("tick", _handleTick)
			.on("after", _handleAfter)
			.add("x", 45, 1, _resetOnLap)
			.add("y", 155, 1.6015625, _resetOnLap);
	};

	const _stopAnimation = () => {
		Ticker
			.off("before", _handleBefore)
			.off("tick", _handleTick)
			.off("after", _handleAfter)
			.remove("x")
			.remove("y");
	};

	const _calculateAxisIncrement = (value, canvasMeasure, phraseMeasure) => {
		let minValue = (canvasMeasure - phraseMeasure) / 4,
			maxValue = phraseMeasure + (canvasMeasure - phraseMeasure) / 2;

		return minValue + (maxValue * pendularEasing(value));
	};

	const _resetOnLap = value => (value >= 360) ? 0 : value;

	const _startFollowingPointer = element =>
		element.addEventListener("mousemove", _handleMousemove);

	const _stopFollowingPointer = element =>
		element.removeEventListener("mousemove", _handleMousemove);

	const _handleMousemove = evt =>
		store.dispatch(updateLightCoord(evt.clientX, evt.clientY));

	const _beforeFirstRender = element =>
		element.addEventListener("click", evt =>
			store.dispatch(toggleLightAutomaticMovement()));

	return {
		render
	};
})();

const Controls = (function() {
	const update = (bindings) => {
		bindings.forEach(binding =>
			_controlViaInput(binding.input, binding.action));

		return () => {
			let state = store.getState();

			bindings.forEach(binding =>
				_updateInput(binding.input, simpleAt(state, binding.stateProp)));
		};
	};

	const _updateInput = (inputEl, stateValue) => {
		if (inputEl.value !== stateValue) {
			inputEl.value = stateValue;
		}
	};

	const _controlViaInput = (inputEl, callback) => {
		inputEl.addEventListener("input", evt =>
			store.dispatch(callback(evt.target.value)));
	};

	return {
		update
	};
})();

const canvasElement = document.getElementById("canvas");
const canvasContext = canvasElement.getContext("2d");
	lightElement = document.getElementById("light"),
	phraseGapInput = document.getElementById("phrase-gap-input"),
	lightReachInput = document.getElementById("light-reach-input"),
	rayApertureInput = document.getElementById("ray-aperture-input"),
	rayReachInput = document.getElementById("ray-reach-input");

const controlsBindings = [{
	input: phraseGapInput,
	action: updatePhraseGap,
	stateProp: "phrase.gap"
}, {
	input: lightReachInput,
	action: updateLightReach,
	stateProp: "light.reach"
}, {
	input: rayApertureInput,
	action: updateRayAperture,
	stateProp: "ray.aperture"
}, {
	input: rayReachInput,
	action: updateRayReach,
	stateProp: "ray.reach"
}];

store.subscribe(Canvas.render(canvasElement, canvasContext));
store.subscribe(Light.render(canvasElement, lightElement));
store.subscribe(Controls.update(controlsBindings));

store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight));
