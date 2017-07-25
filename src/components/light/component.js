import { store } from "../../store/index";
import { updateLightCoord } from "./actionCreators";
import { Phrase } from "../phrase/component";
import { pendularEasing } from "../../helpers/index";

export const Light = (function() {
	let animationFrame,
		xIncrement = 0,
		yIncrement = 0;

	const update = (parentElement, lightElement) => {
		let lastState;

		return () => {
			let state = store.getState(),
				{ autoMove } = state.light;
	
			if(autoMove !== lastState) {
				if (autoMove) {
					_stopFollowingPointer(parentElement);
					_startAnimation(lightElement);
				} else {
					_stopAnimation();
					_startFollowingPointer(parentElement);
				}
			}
	
			lastState = autoMove;
		};
	};

	const _startAnimation = element => {
		animationFrame = window.requestAnimationFrame(() => {
			let state = store.getState(),
				{ source, gap } = state.phrase,
				{ canvas } = state;

			let phraseWidth = Phrase.width(source, gap),
				phraseHeight = Phrase.height(source, gap),
				canvasWidth = canvas.width,
				canvasHeight = canvas.height;

			let x = _calculateAxisIncrement(xIncrement, 45, canvasWidth, phraseWidth),
				y = _calculateAxisIncrement(yIncrement, 155, canvasHeight, phraseHeight);

			element.style.top = `${y}px`;
			element.style.left = `${x}px`;

			store.dispatch(updateLightCoord(x, y));

			xIncrement = xIncrement + 1;
			yIncrement = yIncrement + 1;
			_startAnimation(element);
		});
	};

	const _stopAnimation = () => {
		window.cancelAnimationFrame(animationFrame);
	};

	const _calculateAxisIncrement = (increment, initialAngle, canvasMeasure, phraseMeasure) =>{
		let minValue = (canvasMeasure - phraseMeasure) / 4,
			maxValue = phraseMeasure + (canvasMeasure - phraseMeasure) / 2;

		return minValue + (maxValue * pendularEasing(increment + initialAngle));
	};

	const _startFollowingPointer = element =>
		element.addEventListener("mousemove", _handleMousemove);

	const _stopFollowingPointer = element =>
		element.removeEventListener("mousemove", _handleMousemove);

	const _handleMousemove = evt =>
		store.dispatch(updateLightCoord(evt.clientX, evt.clientY));

	return {
		update
	};
})();