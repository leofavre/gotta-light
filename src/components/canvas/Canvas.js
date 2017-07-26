import { store } from "../../store/index";
import { Phrase } from "../phrase/Phrase";
import { Ray } from "../ray/Ray";

export const Canvas = (function() {
	const update = (element, context) => {
		let state = store.getState(),
			{ light, phrase, ray, canvas } = state,
			visibleCoords = Phrase.visibleCoords(canvas, phrase.source, phrase.gap);

		_updateDimensions(element, canvas.width, canvas.height);
		_cleanUp(context, canvas.width, canvas.height);
		_draw(visibleCoords, context, light, ray);
	};

	const _updateDimensions = (element, width, height) => {
		element.setAttribute("width", width);
		element.setAttribute("height", height);
	};

	const _cleanUp = (context, width, height) => {
		context.clearRect(0, 0, width, height);
	};

	const _draw = (visibleCoords, context, light, ray) => {
		visibleCoords.forEach(rayCoord =>
			Ray.render(context, light.reach, light.coord, ray.reach, rayCoord, ray.aperture));
	};

	return {
		update
	};
})();