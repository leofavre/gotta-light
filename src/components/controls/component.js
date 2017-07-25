import { store } from "../../store/index";
import { simpleAt } from "../../helpers/index";

export const Controls = (function() {
	const update = (bindings) => {
		bindings.forEach(binding =>
			_controlViaInput(binding.input, binding.action));

		return () => {
			let state = store.getState();

			bindings.forEach(binding =>
				_updateInput(binding.input, simpleAt(state, binding.stateProp)));
		};
	};

	const _updateInput = (inputEl, stateValue) => {
		if (inputEl.value !== stateValue) {
			inputEl.value = stateValue;
		}
	};

	const _controlViaInput = (inputEl, callback) => {
		inputEl.addEventListener("input", evt =>
			store.dispatch(callback(evt.target.value)));
	};

	return {
		update
	};
})();