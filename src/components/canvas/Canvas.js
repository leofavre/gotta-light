import { store } from "../../store/index";
import { resizeCanvas } from "./actionCreators";
import { CanvasView } from "./CanvasView";

export const Canvas = (function() {
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