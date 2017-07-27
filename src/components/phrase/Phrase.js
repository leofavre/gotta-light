import { store } from "../../store/index";
import { toFlatten } from "../../helpers/index";
import { PhraseView } from "../phrase/PhraseView";

export const Phrase = (function() {
	const render = (context) => {
		let state = store.getState(),
			{ canvas, phrase } = state;

		let visibleCoords = _calculateVisibleCoords(canvas, phrase.source, phrase.gap);

		PhraseView.render(context, visibleCoords);
	};

	const width = (source, gap) => Math.round(1 + gap * source[0].length);

	const height = (source, gap) => Math.round(1 + gap * source.length);

	const _calculateVisibleCoords = (canvas, source, gap) => {
		let [xStart, yStart] = _calculateInitialCoord(canvas, source, gap);

		return source
			.map((line, lineIndex) =>
				_calculateVisibleCoordsByLine(line, lineIndex, xStart, yStart, gap))
			.reduce(toFlatten);
	};

	const _calculateInitialCoord = (canvas, source, gap) => {
		let phraseWidth = width(source, gap),
			phraseHeight = height(source, gap);

		return [
			Math.round((canvas.width - phraseWidth) / 2),
			Math.round((canvas.height - phraseHeight) / 2)
		];
	};

	const _calculateVisibleCoordsByLine = (line, lineIndex, xStart, yStart, gap) => {
		return line
			.map((dot, dotIndex) =>
				!!dot ? _calculateCoord(xStart, yStart, dotIndex, lineIndex, gap) : null)
			.filter(coord => coord != null);
	};

	const _calculateCoord = (xStart, yStart, xIndex, yIndex, gap) => {
		return [
			Math.round(xIndex * gap + xStart),
			Math.round(yIndex * gap + yStart)
		];
	};

	return {
		render,
		width,
		height
	};
})();