export const LightSourceView = (function() {
	const render = (context, x, y) => {
		context.beginPath();
		context.arc(x, y, 5, 0, 2 * Math.PI, false);
		context.fillStyle = "#fff";
		context.fill();
	};

	return {
		render
	};
})();