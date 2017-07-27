import { store } from "../../store/index";
import { updateLightCoord, toggleLightAutomaticMovement } from "./actionCreators";
import { Phrase } from "../phrase/Phrase";
import { pendularEasing } from "../../helpers/index";
import { Ticker } from "../../helpers/ticker";

export const Light = (function() {
	let lastState, _handleBefore, _handleTick, _handleAfter;

	const render = element => {
		_beforeFirstRender(element);

		return () => {
			let state = store.getState(),
				{ autoMove } = state.light;

			if (autoMove !== lastState) {
				if (autoMove) {
					_stopFollowingPointer(element);
					_startAnimation();
				}
				else {
					_stopAnimation();
					_startFollowingPointer(element);
				}
			}

			lastState = autoMove;
		};
	};

	const _startAnimation = () => {
		let state, source, gap, canvas, x, y;

		_handleBefore = () => {
			state = store.getState(), { source, gap } = state.phrase, { width, height } = state.canvas;
		};

		_handleTick = tick => {
			x = _calculateAxisIncrement(tick.x, width, Phrase.getWidth(source, gap));
			y = _calculateAxisIncrement(tick.y, height, Phrase.getHeight(source, gap));
		};

		_handleAfter = () => {
			store.dispatch(updateLightCoord(x, y));
		};

		Ticker
			.on("before", _handleBefore)
			.on("tick", _handleTick)
			.on("after", _handleAfter)
			.add("x", 45, 1, _resetOnLap)
			.add("y", 155, 1.6015625, _resetOnLap);
	};

	const _stopAnimation = () => {
		Ticker
			.off("before", _handleBefore)
			.off("tick", _handleTick)
			.off("after", _handleAfter)
			.remove("x")
			.remove("y");
	};

	const _calculateAxisIncrement = (value, canvasMeasure, phraseMeasure) => {
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

	const _beforeFirstRender = element =>
		element.addEventListener("click", evt => {
			store.dispatch(toggleLightAutomaticMovement());
			store.dispatch(updateLightCoord(evt.clientX, evt.clientY));
		});

	return {
		render
	};
})();