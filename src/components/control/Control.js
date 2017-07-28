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
		if (input.type === "range") {
			input.addEventListener("input", evt => {
				store.dispatch(action(parseFloat(evt.target.value)));
			});
		}
		else if (input.type === "checkbox") {
			input.addEventListener("change", evt => {
				store.dispatch(action(evt.target.checked));
			});
		}
	};

	return {
		bind
	};
})();