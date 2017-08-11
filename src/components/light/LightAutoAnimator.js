import { store } from "../../store/index";
import { Phrase } from "../phrase/Phrase";
import { updateLightCoord } from "./actionCreators";
import { updateProps } from "../../helpers/index";
import { pendularEasing } from "../../helpers/index";
import { Ticker } from "../../helpers/ticker";

export const LightAutoAnimator = (function() {
	let _handleBefore, _handleTick, _handleAfter;

	const start = (xIncrement, yIncrement, xStart, yStart) => {
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

	const stop = () => {
		let newXStart = Ticker.getValueFrom("x"),
			newYStart = Ticker.getValueFrom("y");

		Ticker
			.off("before", _handleBefore)
			.off("tick", _handleTick)
			.off("after", _handleAfter)
			.remove("x")
			.remove("y");

		return {
			xStart: newXStart,
			yStart: newYStart
		};
	};

	const update = (xIncrement, yIncrement) => {
		Ticker
			.updateIncrement("x", xIncrement)
			.updateIncrement("y", yIncrement);
	};

	const _calculateAxisIncrement = (value, canvasMeasure, phraseMeasure) => {
		let minValue = (canvasMeasure - phraseMeasure) / 4,
			maxValue = phraseMeasure + (canvasMeasure - phraseMeasure) / 2;

		return minValue + (maxValue * pendularEasing(value));
	};

	const _resetOnLap = value => value % 360;

	return {
		start,
		stop,
		update
	};
})();
