import { store } from "../../store/index";
import { LightSourceView } from "./LightSourceView";

export const LightSource = (function() {
	const render = context => {
		return () => {
			let state = store.getState(),
				[x, y] = state.light.coord;

			LightSourceView.render(context, x, y);
		};
	};

	return {
		render
	};
})();