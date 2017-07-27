import { Phrase } from "../phrase/Phrase";

export const CanvasView = (function() {
	const render = (element, context, canvasWidth, canvasHeight) => {
		_updateDimensions(element, canvasWidth, canvasHeight);
		_cleanUp(context, canvasWidth, canvasHeight);
		Phrase.render(context);
	};

	const _updateDimensions = (element, canvasWidth, canvasHeight) => {
		element.setAttribute("width", canvasWidth);
		element.setAttribute("height", canvasHeight);
	};

	const _cleanUp = (context, canvasWidth, canvasHeight) => {
		context.clearRect(0, 0, canvasWidth, canvasHeight);
	};

	return {
		render
	};
})();
