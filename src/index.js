import createStore from "redux/es/createStore";
// import "pixi.js/dist/pixi";

const getRendererWidth = () => window.innerWidth;
const getRendererHeight = () => window.innerHeight;



/**/

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

var app = new PIXI.Application(getRendererWidth(), getRendererHeight(), { backgroundColor: 0x000000 });
document.body.appendChild(app.view);

var container = new PIXI.Container();
app.stage.addChild(container);

// Create a new texture
var texture = PIXI.Texture.fromImage("ray.png");

// Create a 5x5 grid of bunnies
for (var i = 0; i < 25; i++) {
	var ray = new PIXI.Sprite(texture);
	ray.anchor.set(0.5);
	ray.x = (i % 5) * 80;
	ray.y = Math.floor(i / 5) * 80;

	ray.scale.x = 0.8;
	ray.scale.y = 0.1;
	container.addChild(ray);
}

// move container to the center
container.x = app.renderer.width / 2;
container.y = app.renderer.height / 2;

// Center ray sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

app.renderer.autoResize = true;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";

window.addEventListener("resize", evt => {
	app.renderer.resize(getRendererWidth(), getRendererHeight());
	container.x = app.renderer.width / 2;
	container.y = app.renderer.height / 2;
	app.renderer.render(app.stage);
});

/*
// Listen for animate update

app.ticker.add(function(delta) {
	// rotate the container!
	// use delta to create frame-independent tranform
	container.rotation -= 0.01 * delta;
});
*/



/**/



const RESIZE_RENDERER = "RESIZE_RENDERER";

const initialState = {
	width: getRendererWidth(),
	height: getRendererHeight()
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

const resizeRendererBound = evt => store.dispatch({
	type: RESIZE_RENDERER,
	width: getRendererWidth(),
	height: getRendererHeight()
});

window.addEventListener("resize", resizeRendererBound);

const reduxApp = (state = {}, action) => ({
	reduxRenderer: reduxRenderer(state.reduxRenderer, action)
});

const store = createStore(reduxApp);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));