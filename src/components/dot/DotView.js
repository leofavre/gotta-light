export const DotView = (function() {
	const render = (element, x, y) => {
		element.style.left = `${x}px`;
		element.style.top = `${y}px`;
	};

	return {
		render
	};
})();