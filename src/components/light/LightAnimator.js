import { store } from "../../store/index";
import { updateLightCoord, toggleLightAutomaticMovement } from "./actionCreators";
import { updateProps, hasChanged } from "../../helpers/index";
import { LightMouseAnimator } from "./LightMouseAnimator";
import { LightAutoAnimator } from "./LightAutoAnimator";

export const LightAnimator = (function() {
	let last = {};

	const update = element => {
		_beforeFirstUpdate(element);

		return () => {
			let state = store.getState(),
				{ autoMove, xIncrement, yIncrement} = state.light;

			let xStart = last.xStart == null ? state.light.xStart : last.xStart,
				yStart = last.yStart == null ? state.light.yStart : last.yStart;

			_updateBehaviourIfChanged(autoMove, xIncrement, yIncrement, xStart, yStart);
			_updateAnimationTrajectoryIfChanged(autoMove, xIncrement, yIncrement);

			last = updateProps(last, {
				autoMove,
				xIncrement,
				yIncrement
			});
		};
	};

	const _beforeFirstUpdate = element => {
		element.addEventListener("click", evt => {
			store.dispatch(toggleLightAutomaticMovement());
			store.dispatch(updateLightCoord(evt.clientX, evt.clientY));
		});
	};

	const _updateBehaviourIfChanged = (autoMove, xIncrement, yIncrement, xStart, yStart) => {
		if (hasChanged(autoMove, last.autoMove)) {
			if (autoMove) {
				LightMouseAnimator.stop();
				LightAutoAnimator.start(xIncrement, yIncrement, xStart, yStart);
			}
			else {
				let { xStart, yStart } = LightAutoAnimator.stop();
				LightMouseAnimator.start();

				last = updateProps(last, {
					xStart,
					yStart
				});
			}
		}
	};

	const _updateAnimationTrajectoryIfChanged = (autoMove, xIncrement, yIncrement) => {
		if (autoMove && (hasChanged(xIncrement, last.xIncrement) || hasChanged(yIncrement, last.yIncrement))) {
			LightAutoAnimator.update(xIncrement, yIncrement);
		}
	};

	return {
		update
	};
})();