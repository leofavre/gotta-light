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

const processPhraseSource = arr =>
	arr.map(str => Array.from(str).map(value => parseInt(value) || 0));

const initialState = {
	automatic: true,
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
		source: processPhraseSource(gottaLight)
	},
	ray: {
		aperture: 12,
		reach: 80
	}
};

const TOGGLE_ANIMATION_BEHAVIOUR = "TOGGLE_ANIMATION_BEHAVIOUR";
const RESIZE_CANVAS = "RESIZE_CANVAS";
const UPDATE_LIGHT_COORD = "UPDATE_LIGHT_COORD";
const UPDATE_LIGHT_REACH = "UPDATE_LIGHT_REACH";
const UPDATE_PHRASE_GAP = "UPDATE_PHRASE_GAP";
const UPDATE_PHRASE_SOURCE = "UPDATE_PHRASE_SOURCE";
const UPDATE_RAY_APERTURE = "UPDATE_RAY_APERTURE";
const UPDATE_RAY_REACH = "UPDATE_RAY_REACH";

const toggleAnimationBehaviour = () => ({
	type: TOGGLE_ANIMATION_BEHAVIOUR
});

const resizeCanvas = (width, height) => ({
	type: RESIZE_CANVAS,
	width,
	height
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

const updatePhraseSource = source => ({
	type: UPDATE_PHRASE_SOURCE,
	source
});

const updateRayAperture = aperture => ({
	type: UPDATE_RAY_APERTURE,
	aperture
});

const updateRayReach = reach => ({
	type: UPDATE_RAY_REACH,
	reach
});

const updatePropsToAction = (state, action, ...props) => {
	let newProps = props.map(name => ({
		[name]: action[name]
	}));

	return Object.assign({}, state, ...newProps);
};

const automatic = (state = initialState.automatic, action) => {
	switch (action.type) {
		case TOGGLE_ANIMATION_BEHAVIOUR:
			return !state;

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

		case UPDATE_LIGHT_REACH:
			return updatePropsToAction(state, action, "reach");

		default:
			return state;
	}
};

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
	automatic,
	light,
	phrase,
	ray,
	canvas
});

const store = Redux.createStore(app, initialState);

const degToRad = angle => angle * (Math.PI / 180);

const radToDeg = angle => angle * (180 / Math.PI);

const toFlatten = (prevArr, nextArr) => prevArr.concat(nextArr);

const toSum = (prevNum, nextNum) => prevNum + nextNum;

const parsePath = path => Array.isArray(path) ? path : `${path}`.split(".");

const simpleAt = (obj, path) =>
	parsePath(path).reduce((obj, key) => {
		return (obj != null && obj.hasOwnProperty(key)) ? obj[key] : undefined;
	}, obj);

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

const Ray = (function() {
	const render = (context, lightReach, lightCoord, rayReach, rayCoord, rayAperture) => {
		let arcDefinition = _calculateArc(lightReach, lightCoord, rayReach, rayCoord, rayAperture),
			[radius, angle] = arcDefinition,
			translatedCoord = translateAndRotateCoord(rayCoord, radius, angle);

		_draw(context, rayCoord, translatedCoord, arcDefinition);
	};

	const _draw = (context, rayCoord, translatedCoord, arcDefinition) => {
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

const Phrase = (function() {
	const visibleCoords = (canvas, source, gap) => {
		let [xStart, yStart] = _calculateInitialCoord(canvas, source, gap);

		return source
			.map((line, lineIndex) =>
				_calculateVisibleCoordsInLine(line, lineIndex, xStart, yStart, gap))
			.reduce(toFlatten);
	};

	const width = (source, gap) => Math.round(1 + gap * source[0].length);

	const height = (source, gap) => Math.round(1 + gap * source.length);

	const _calculateInitialCoord = (canvas, source, gap) => {
		let phraseWidth = width(source, gap),
			phraseHeight = height(source, gap);

		return [
			Math.round((canvas.width - phraseWidth) / 2),
			Math.round((canvas.height - phraseHeight) / 2)
		];
	};

	const _calculateVisibleCoordsInLine = (line, lineIndex, xStart, yStart, gap) => {
		return line
			.map((dot, dotIndex) =>
				!!dot ? _calculateCoord(xStart, yStart, dotIndex, lineIndex, gap) : null)
			.filter(rayCoord => rayCoord != null);
	};

	const _calculateCoord = (xStart, yStart, xIndex, yIndex, gap) => {
		return [
			Math.round(xIndex * gap + xStart),
			Math.round(yIndex * gap + yStart)
		];
	};

	return {
		visibleCoords,
		width,
		height
	};
})();

const Light = (function() {
	let animationFrame,
		xIncrement = 0,
		yIncrement = 0;

	const update = (parentElement, lightElement) => {
		let lastState;

		return () => {
			let state = store.getState();
	
			if(state.automatic !== lastState) {
				if (state.automatic) {
					_stopFollowingPointer(parentElement);
					_startAnimation(lightElement);
				} else {
					_stopAnimation();
					_startFollowingPointer(parentElement);
				}
			}
	
			lastState = state.automatic;
		};
	};

	const _startAnimation = element => {
		animationFrame = window.requestAnimationFrame(() => {
			let state = store.getState(),
				{ source, gap } = state.phrase,
				{ canvas } = state;

			let phraseWidth = Phrase.width(source, gap),
				phraseHeight = Phrase.height(source, gap),
				canvasWidth = canvas.width,
				canvasHeight = canvas.height;

			let x = _calculateAxisIncrement(xIncrement, 45, canvasWidth, phraseWidth),
				y = _calculateAxisIncrement(yIncrement, 155, canvasHeight, phraseHeight);

			element.style.top = `${y}px`;
			element.style.left = `${x}px`;

			store.dispatch(updateLightCoord(x, y));

			xIncrement = xIncrement + 1;
			yIncrement = yIncrement + 1;
			_startAnimation(element);
		});
	};

	const _stopAnimation = () => {
		window.cancelAnimationFrame(animationFrame);
	};

	const _calculateAxisIncrement = (increment, initialAngle, canvasMeasure, phraseMeasure) =>{
		let minValue = (canvasMeasure - phraseMeasure) / 4,
			maxValue = phraseMeasure + (canvasMeasure - phraseMeasure) / 2;

		return minValue + (maxValue * pendularEasing(increment + initialAngle));
	};

	const _startFollowingPointer = element =>
		element.addEventListener("mousemove", _handleMousemove);

	const _stopFollowingPointer = element =>
		element.removeEventListener("mousemove", _handleMousemove);

	const _handleMousemove = evt =>
		store.dispatch(updateLightCoord(evt.clientX, evt.clientY));

	return {
		update
	};
})();

const Canvas = (function() {
	const render = (parentElement) => {
		parentElement.innerHTML = `<canvas></canvas>`;
		const element = parentElement.children[0];
		const context = element.getContext('2d');

		return () => {
			let state = store.getState(),
				{ light, phrase, ray, canvas } = state,
				visibleCoords = Phrase.visibleCoords(canvas, phrase.source, phrase.gap);

			_updateDimensions(element, canvas.width, canvas.height);
			_cleanUp(context, canvas.width, canvas.height);
			_draw(visibleCoords, context, light, ray);
		};
	};

	const _updateDimensions = (element, width, height) => {
		element.setAttribute("width", width);
		element.setAttribute("height", height);
	};

	const _cleanUp = (context, width, height) => {
		context.clearRect(0, 0, width, height);
	};

	const _draw = (visibleCoords, context, light, ray) => {
		visibleCoords.forEach(rayCoord =>
			Ray.render(context, light.reach, light.coord, ray.reach, rayCoord, ray.aperture));
	};

	return {
		render
	};
})();

const UserInterface = (function() {
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

const parentElement = document.getElementById("root"),
	lightElement = document.getElementById("light"),
	phraseGapInput = document.getElementById("phrase-gap-input"),
	lightReachInput = document.getElementById("light-reach-input"),
	rayApertureInput = document.getElementById("ray-aperture-input"),
	rayReachInput = document.getElementById("ray-reach-input");

const userInterfaceBindings = [{
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

window.addEventListener("resize", evt =>
	store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight)));

parentElement.addEventListener("click", evt =>
	store.dispatch(toggleAnimationBehaviour()));

store.subscribe(Canvas.render(parentElement));
store.subscribe(Light.update(parentElement, lightElement));
store.subscribe(UserInterface.update(userInterfaceBindings));

store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight));
