import { calculateAngleBetweenLineAndXAxis, calculateDistanceBetweenCoords, degToRad, translateAndRotateCoord } from "../../helpers/index";
import { RayView } from "./RayView";

export const Ray = (function() {
	const render = (context, lightReach, lightCoord, rayReach, rayCoord, rayAperture) => {
		let arcDefinition = _calculateArc(lightReach, lightCoord, rayReach, rayCoord, rayAperture),
			[radius, angle] = arcDefinition,
			translatedCoord = translateAndRotateCoord(rayCoord, radius, angle);

		RayView.render(context, rayCoord, translatedCoord, arcDefinition);
	};

	const _calculateArc = (lightReach, lightCoord, rayReach, rayCoord, rayAperture) => {
		let radius = _calculateRadius(lightReach, lightCoord, rayReach, rayCoord),
			rotationInRadians = _calculateRotation(lightCoord, rayCoord),
			apertureInRadians = degToRad(rayAperture),
			angle1 = rotationInRadians - apertureInRadians / 2,
			angle2 = rotationInRadians + apertureInRadians / 2;

		return [radius, angle1, angle2];
	};

	const _calculateRadius = (lightReach, lightCoord, rayReach, rayCoord) => {
		let distanceToLightSource = calculateDistanceBetweenCoords(lightCoord, rayCoord),
			scale = 1 - (distanceToLightSource / (lightReach * rayReach));

		return rayReach * Math.max(Math.min(scale, 1), 0);
	};

	const _calculateRotation = (lightCoord, rayCoord) =>
		calculateAngleBetweenLineAndXAxis(lightCoord, rayCoord);

	return {
		render
	};
})();