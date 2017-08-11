import { store } from "../../store/index";
import { updateLightCoord } from "./actionCreators";


export const LightMouseAnimator = (function() {
	const start = () =>
		document.body.addEventListener("mousemove", _handleMousemove);

	const stop = () =>
		document.body.removeEventListener("mousemove", _handleMousemove);

	const _handleMousemove = evt =>
		store.dispatch(updateLightCoord(evt.clientX, evt.clientY));

	return {
		start,
		stop
	};
})();
