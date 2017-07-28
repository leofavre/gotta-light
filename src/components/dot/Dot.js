import { store } from "../../store/index";
import { DotView } from "./DotView";

export const Dot = (function() {
	const render = context => {
		return () => {
			let state = store.getState(),
				[x, y] = state.light.coord;

			DotView.render(context, x, y);
		};
	};

	return {
		render
	};
})();