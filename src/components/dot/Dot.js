import { store } from "../../store/index";
import { DotView } from "./DotView";

export const Dot = (function() {
	const render = (element) => {
		let state = store.getState(),
			[x, y] = state.light.coord;

		DotView.render(element, x, y);
	};

	return {
		render
	};
})();