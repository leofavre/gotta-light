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

console.log(store);
