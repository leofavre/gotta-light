import { store } from "../../store/index";
import { updateLightCoord, toggleLightAutomaticMovement, updateLightStart } from "./actionCreators";
import { Phrase } from "../phrase/Phrase";
import { pendularEasing } from "../../helpers/index";
import { Ticker } from "../../helpers/ticker";
import { updateProps } from "../../helpers/index";

export const LightAnimator = (function() {
	let last = {},
		_handleBefore, _handleTick, _handleAfter;

	const _hasChanged = (currentValue, lastValue) => lastValue == null || currentValue !== lastValue;

	const update = element => {
		_beforeFirstUpdate(element);

		return () => {
			let state = store.getState(),
				{ autoMove, xIncrement, yIncrement, xStart, yStart } = state.light;

			_updateBehaviourIfChanged(autoMove, xIncrement, yIncrement, xStart, yStart);
			_updateAnimationIfChanged(autoMove, xIncrement, yIncrement);

			last = updateProps(last, {
				autoMove,
				xIncrement,
				yIncrement,
				xStart,
				yStart
			});
		};
	};

	const _beforeFirstUpdate = element => {
		element.addEventListener("click", evt => {
			store.dispatch(toggleLightAutomaticMovement());
			store.dispatch(updateLightCoord(evt.clientX, evt.clientY));
		});
	};

	const _updateBehaviourIfChanged = (autoMove, xIncrement, yIncrement, xStart, yStart) => {
		if (_hasChanged(autoMove, last.autoMove)) {
			if (autoMove) {
				_stopFollowingPointer();
				_startAnimation(xIncrement, yIncrement, xStart, yStart);
			}
			else {
				_stopAnimation();
				_startFollowingPointer();
			}
		}
	};

	const _updateAnimationIfChanged = (autoMove, xIncrement, yIncrement) => {
		if (autoMove && (_hasChanged(xIncrement, last.xIncrement) || _hasChanged(yIncrement, last.yIncrement))) {
			_updateAnimationTrajectory(xIncrement, yIncrement);
		}
	};

	const _updateAnimationTrajectory = (xIncrement, yIncrement) => {
		Ticker
			.updateIncrement("x", xIncrement)
			.updateIncrement("y", yIncrement);
	};

	const _startAnimation = (xIncrement, yIncrement, xStart, yStart) => {
		let state, source, gap, width, height, x, y;

		_handleBefore = () => {
			state = store.getState();
			source = state.phrase.source;
			gap = state.phrase.gap;
			width = state.canvas.width;
			height = state.canvas.height;
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
			.add("x", xStart, xIncrement, _resetOnLap)
			.add("y", yStart, yIncrement, _resetOnLap);
	};

	const _stopAnimation = () => {
		let newXStart = Ticker.getValueFrom("x"),
			newYStart = Ticker.getValueFrom("y");

		last = updateProps(last, {
			xStart: newXStart,
			yStart: newYStart
		});

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