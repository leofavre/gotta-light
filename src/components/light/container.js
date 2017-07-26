import { store } from "../../store/index";
import { updateLightCoord } from "./actionCreators";
import { Phrase } from "../phrase/container";
import { pendularEasing } from "../../helpers/index";
import { Ticker } from "../../helpers/ticker";

export const Light = (function() {
	let _handleBefore, _handleTick, _handleAfter;

	const update = (parentElement, lightElement) => {
		let lastState;

		return () => {
			let state = store.getState(),
				{ autoMove } = state.light;
	
			if (autoMove !== lastState) {
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
		let state, source, gap, canvas, x, y;

		_handleBefore = () => {
			state = store.getState(),
			{ source, gap } = state.phrase,
			{ canvas } = state;
		};

		_handleTick = tick => {
			x = _calculateAxisIncrement(tick.x, canvas.width, Phrase.width(source, gap));
			y = _calculateAxisIncrement(tick.y, canvas.height, Phrase.height(source, gap));
		};

		_handleAfter = () => {
			// element.style.left = `${x}px`;
			// element.style.top = `${y}px`;
			store.dispatch(updateLightCoord(x, y));
		};

		Ticker
			.on("before", _handleBefore)
			.on("tick", _handleTick)
			.on("after", _handleAfter)
			.add("x", 45, 1, _resetOnLap)
			.add("y", 155, 1.2, _resetOnLap);
	};

	const _stopAnimation = () => {
		Ticker
			.off("before", _handleBefore)
			.off("tick", _handleTick)
			.off("after", _handleAfter)
			.remove("x")
			.remove("y");
	};

	const _calculateAxisIncrement = (value, canvasMeasure, phraseMeasure) =>{
		let minValue = (canvasMeasure - phraseMeasure) / 4,
			maxValue = phraseMeasure + (canvasMeasure - phraseMeasure) / 2;

		return minValue + (maxValue * pendularEasing(value));
	};

	const _resetOnLap = value => (value >= 360) ? 0 : value;

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