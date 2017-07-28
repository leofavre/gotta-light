export const radToDeg = angle => angle * (180 / Math.PI);

export const degToRad = angle => angle * (Math.PI / 180);

export const toFlatten = (prevArr, nextArr) => prevArr.concat(nextArr);

export const toSum = (prevNum, nextNum) => prevNum + nextNum;

const parsePath = path => Array.isArray(path) ? path : `${path}`.split(".");

export const simpleAt = (obj, path) => {
	return parsePath(path).reduce((obj, key) => {
		return (obj != null && obj.hasOwnProperty(key)) ? obj[key] : undefined;
	}, obj);
};

export const calculateDistanceBetweenCoords = (coordA, coordB) => {
	return Math.sqrt(coordA
		.map((coord, index) => Math.pow(coord - coordB[index], 2))
		.reduce(toSum));
};

export const calculateAngleBetweenLineAndXAxis = (coordA, coordB) => {
	let [x, y] = coordA, [xb, yb] = coordB;

	return Math.atan2((yb - y), (xb - x));
};

export const translateAndRotateCoord = (coord, distance, rotation) => {
	let [x, y] = coord;

	return [
		x + distance * Math.cos(rotation),
		y + distance * Math.sin(rotation)
	];
};

export const pendularEasing = num => {
	if (num % 90 === 0 && num % 180 !== 0) {
		return 0.5 + 0;
	}

	return 0.5 + (Math.cos(degToRad(num % 360)) / 2);
};

export const updateProps = (state, ...objs) => Object.assign({}, state, ...objs);

export const updatePropsToAction = (state, action, ...props) => {
	let newProps = props.map(name => ({
		[name]: action[name]
	}));

	return updateProps(state, ...newProps);
};
