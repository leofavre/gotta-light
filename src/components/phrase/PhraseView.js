import { Ray } from "../ray/Ray";

export const PhraseView = (function() {
	const render = (context, visibleCoords) => {
		visibleCoords.forEach(rayCoord => Ray.render(context, rayCoord));
	};

	return {
		render
	};
})();