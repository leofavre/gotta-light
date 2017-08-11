export const ControlView = (function() {
	const render = (input, value) => {
		if (input.type === "checkbox") {
			_changeInputProperty(input, "checked", value);
		}
		else if (input.type === "range") {
			_changeInputProperty(input, "value", value);
		}
	};

	const _changeInputProperty = (input, prop, value) => {
		if (input[prop] !== value) {
			input[prop] = value;
		}
	};

	return {
		render
	};
})();
