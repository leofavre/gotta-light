import { store } from "../../store/index";
import { ControlView } from "./ControlView";
import { simpleAt } from "../../helpers/index";

export const Control = (function() {
	const bind = (input, statePath, action) => {
		_beforeFirstBind(input, action);

		return () => {
			let state = store.getState();
			ControlView.render(input, simpleAt(state, statePath));
		};
	};

	const _beforeFirstBind = (input, action) => {
		switch (input.type) {
			case "range": _dealWithRange(input, action);
			case "checkbox": _dealWithCheckbox(input, action);
		}
	};

	const _dealWithRange = (input, action) => {
		input.addEventListener("input", evt => {
			store.dispatch(action(parseFloat(evt.target.value)));
		});
	};

	const _dealWithCheckbox = (input, action) => {
		input.addEventListener("change", evt => {
			store.dispatch(action(evt.target.checked));
		});
	};

	return {
		bind
	};
})();