export const ControlView = (function() {
	const render = (input, value) => {
		switch (input.type) {
			case "range": _changeInputProperty(input, "value", value);
			case "checkbox": _changeInputProperty(input, "checked", value);
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
