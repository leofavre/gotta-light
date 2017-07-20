import createStore from "redux/es/createStore";
import "pixi.js/dist/pixi";

const getStageWidth = () => window.innerWidth;
const getStageHeight = () => window.innerHeight;



/**/



var app = new PIXI.Application(getStageWidth(), getStageHeight(), { backgroundColor: 0x000000 });
document.body.appendChild(app.view);

var container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
var texture = PIXI.Texture.fromImage("bunny.png");

// Create a 5x5 grid of bunnies
for (var i = 0; i < 25; i++) {
	var bunny = new PIXI.Sprite(texture);
	bunny.anchor.set(0.5);
	bunny.x = (i % 5) * 15;
	bunny.y = Math.floor(i / 5) * 80;
	container.addChild(bunny);
}

// move container to the center
container.x = app.renderer.width / 2;
container.y = app.renderer.height / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = 0;
container.pivot.y = 0;

app.renderer.autoResize = true;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";

window.addEventListener("resize", evt => {
	app.renderer.resize(getStageWidth(), getStageHeight());
	container.x = app.renderer.width / 2;
	container.y = app.renderer.height / 2;
	app.renderer.render(app.stage);
});

// Listen for animate update

app.ticker.add(function(delta) {
	// rotate the container!
	// use delta to create frame-independent tranform
	container.rotation -= 0.01 * delta;
});



/**/



const RESIZE_RENDERER = "RESIZE_RENDERER";

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

const reduxApp = (state = {}, action) => ({
	reduxRenderer: reduxRenderer(state.reduxRenderer, action)
});

const store = createStore(reduxApp);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));