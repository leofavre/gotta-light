export const tick = (increment, easingFunction) => {
	return easingFunction(increment + 1);
};

const easingFunction = num => num * 2;