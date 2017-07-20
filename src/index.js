import createStore from "redux/es/createStore";
import "pixi.js/dist/pixi";

let renderer = PIXI.autoDetectRenderer(150, 150),
	stage = new PIXI.Container(),
	circle = new PIXI.Graphics();

startRenderer(renderer);
updateProportions(stage, renderer, window.innerWidth, window.innerHeight);

window.addEventListener("resize", function() {
	updateProportions(stage, renderer, window.innerWidth, window.innerHeight);
});

circle.beginFill(0x00BFFF);
circle.lineStyle(2);
circle.drawCircle(0, 0, 100);
circle.endFill();
stage.addChild(circle);

centerStageToRenderer(stage, renderer);
renderer.render(stage);

document.body.appendChild(renderer.view);

function startRenderer(renderer) {
	renderer.autoResize = true;
	renderer.view.style.position = "absolute";
	renderer.view.style.display = "block";
}

function updateProportions(stage, renderer, rendererWidth, rendererHeight) {
	renderer.resize(rendererWidth, rendererHeight);
	centerStageToRenderer(stage, renderer);
	renderer.render(stage);
}

function centerStageToRenderer(stage, renderer) {
	stage.x = (renderer.width / 2);
	stage.y = (renderer.height / 2);
}



/**/



const RESIZE_RENDERER = "RESIZE_RENDERER";

const getStageWidth = () => window.innerWidth;
const getStageHeight = () => window.innerHeight;

const initialState = {
	width: getStageWidth(),
	height: getStageHeight()
};

const reduxRenderer = (state = initialState, action) => {
	if (action.type === RESIZE_RENDERER) {
		return {
			width: action.width,
			height: action.height
		};
	}
	return state;
};

const resizeStageBound = evt => store.dispatch({
	type: RESIZE_RENDERER,
	width: getStageWidth(),
	height: getStageHeight()
});

window.addEventListener("resize", resizeStageBound);

const app = (state = {}, action) => ({
	reduxRenderer: reduxRenderer(state.reduxRenderer, action)
});

const store = createStore(app);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
