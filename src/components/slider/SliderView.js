export const SliderView = (function() {
	const render = (element, value) => {
		if (element.value !== value) {
			element.value = value;
		}
	};

	return {
		render
	};
})();
