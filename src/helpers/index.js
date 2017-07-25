const degToRad = angle => angle * (Math.PI / 180);

const radToDeg = angle => angle * (180 / Math.PI);

const toFlatten = (prevArr, nextArr) => prevArr.concat(nextArr);

const toSum = (prevNum, nextNum) => prevNum + nextNum;

const parsePath = path => Array.isArray(path) ? path : `${path}`.split(".");

const simpleAt = (obj, path) =>
	parsePath(path).reduce((obj, key) => {
		return (obj != null && obj.hasOwnProperty(key)) ? obj[key] : undefined;
	}, obj);

const calculateDistanceBetweenCoords = (coordA, coordB) => {
	return Math.sqrt(coordA
		.map((coord, index) => Math.pow(coord - coordB[index], 2))
		.reduce(toSum));
};

const calculateAngleBetweenLineAndXAxis = (coordA, coordB) => {
	let [x, y] = coordA, [xb, yb] = coordB;

	return Math.atan2((yb - y), (xb - x));
};

const translateAndRotateCoord = (coord, distance, rotation) => {
	let [x, y] = coord;

	return [
		x + distance * Math.cos(rotation),
		y + distance * Math.sin(rotation)
	];
};

const pendularEasing = num => {
	if (num % 90 === 0 && num % 180 !== 0) {
		return 0.5 + 0;
	}

	return 0.5 + (Math.cos(degToRad(num % 360)) / 2);
};

const updatePropsToAction = (state, action, ...props) => {
	let newProps = props.map(name => ({
		[name]: action[name]
	}));

	return Object.assign({}, state, ...newProps);
};
