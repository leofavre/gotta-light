import { store } from "../../store/index";
import { LightOriginView } from "./LightOriginView";

export const LightOrigin = (function() {
	const render = context => {
		return () => {
			let state = store.getState(),
				{ showOrigin, coord } = state.light;

			if (showOrigin) {
				LightOriginView.render(context, ...coord);
			}
		};
	};

	return {
		render
	};
})();