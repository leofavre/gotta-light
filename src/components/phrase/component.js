import { toFlatten } from "../../helpers/index";

export const Phrase = (function() {
	const visibleCoords = (canvas, source, gap) => {
		let [xStart, yStart] = _calculateInitialCoord(canvas, source, gap);

		return source
			.map((line, lineIndex) =>
				_calculateVisibleCoordsInLine(line, lineIndex, xStart, yStart, gap))
			.reduce(toFlatten);
	};

	const width = (source, gap) => Math.round(1 + gap * source[0].length);

	const height = (source, gap) => Math.round(1 + gap * source.length);

	const _calculateInitialCoord = (canvas, source, gap) => {
		let phraseWidth = width(source, gap),
			phraseHeight = height(source, gap);

		return [
			Math.round((canvas.width - phraseWidth) / 2),
			Math.round((canvas.height - phraseHeight) / 2)
		];
	};

	const _calculateVisibleCoordsInLine = (line, lineIndex, xStart, yStart, gap) => {
		return line
			.map((dot, dotIndex) =>
				!!dot ? _calculateCoord(xStart, yStart, dotIndex, lineIndex, gap) : null)
			.filter(rayCoord => rayCoord != null);
	};

	const _calculateCoord = (xStart, yStart, xIndex, yIndex, gap) => {
		return [
			Math.round(xIndex * gap + xStart),
			Math.round(yIndex * gap + yStart)
		];
	};

	return {
		visibleCoords,
		width,
		height
	};
})();