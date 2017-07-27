import { store } from "../../store/index";
import { CanvasView } from "./CanvasView";

export const Canvas = (function() {
	const render = (element, context) => {
		let state = store.getState(),
			{ width, height } = state.canvas;

		CanvasView.render(element, context, width, height);
	};

	return {
		render
	};
})();