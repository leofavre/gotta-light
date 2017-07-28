import { store } from "../../store/index";
import { SliderView } from "./SliderView";
import { simpleAt } from "../../helpers/index";

export const Slider = (function() {
	const bind = (element, statePath, action) => {
		_beforeFirstBind(element, action);

		return () => {
			let state = store.getState();
			SliderView.render(element, simpleAt(state, statePath));
		};
	};

	const _beforeFirstBind = (element, action) =>
		element.addEventListener("input", evt =>
			store.dispatch(action(evt.target.value)));

	return {
		bind
	};
})();
