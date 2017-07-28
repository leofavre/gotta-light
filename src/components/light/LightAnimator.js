import { store } from "../../store/index";
import { updateLightCoord, toggleLightAutomaticMovement } from "./actionCreators";
import { Phrase } from "../phrase/Phrase";
import { pendularEasing } from "../../helpers/index";
import { Ticker } from "../../helpers/ticker";

export const LightAnimator = (function() {
	let lastState, _handleBefore, _handleTick, _handleAfter;

	const update = element => {
		_beforeFirstUpdate(element);

		return () => {
			let state = store.getState(),
				{ autoMove, xIncrement, yIncrement } = state.light;

			if (lastState == null || autoMove !== lastState.autoMove) {
				if (autoMove) {
					_stopFollowingPointer();
					_startAnimation();
				}
				else {
					_stopAnimation();
					_startFollowingPointer();
				}
			}

			if (lastState != null && (xIncrement !== lastState.xIncrement || yIncrement !== lastState.yIncrement)) {
				_updateAnimationTrajectory(xIncrement, yIncrement);
			}

			lastState = {
				autoMove,
				xIncrement,
				yIncrement
			};
		};
	};

	const _beforeFirstUpdate = element =>
		element.addEventListener("click", evt => {
			store.dispatch(toggleLightAutomaticMovement());
			store.dispatch(updateLightCoord(evt.clientX, evt.clientY));
		});

	const _updateAnimationTrajectory = (xIncrement, yIncrement) => {
		Ticker
			.update("x", "increment", xIncrement)
			.update("y", "increment", yIncrement);
	};

	const _startAnimation = () => {
		let state, source, gap, width, height, x, y, xIncrement, yIncrement;

		_handleBefore = () => {
			state = store.getState();
			source = state.phrase.source;
			gap = state.phrase.gap;
			width = state.canvas.width;
			height = state.canvas.height;
			xIncrement = state.light.xIncrement;
			yIncrement = state.light.yIncrement;
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
			.add("x", 45, xIncrement, _resetOnLap)
			.add("y", 155, yIncrement, _resetOnLap);
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

	const _startFollowingPointer = () =>
		document.body.addEventListener("mousemove", _handleMousemove);

	const _stopFollowingPointer = () =>
		document.body.removeEventListener("mousemove", _handleMousemove);

	const _handleMousemove = evt =>
		store.dispatch(updateLightCoord(evt.clientX, evt.clientY));

	return {
		update
	};
})();