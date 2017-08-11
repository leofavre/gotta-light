import {
	TOGGLE_LIGHT_AUTOMATIC_MOVEMENT,
	TOGGLE_LIGHT_ORIGIN,
	UPDATE_LIGHT_COORD,
	UPDATE_LIGHT_REACH,
	UPDATE_LIGHT_X_INCREMENT,
	UPDATE_LIGHT_Y_INCREMENT
} from "./constants";

export const toggleLightAutomaticMovement = () => ({
	type: TOGGLE_LIGHT_AUTOMATIC_MOVEMENT
});

export const toggleLightOrigin = showOrigin => ({
	type: TOGGLE_LIGHT_ORIGIN,
	showOrigin
});

export const updateLightCoord = (x, y) => ({
	type: UPDATE_LIGHT_COORD,
	coord: [x, y]
});

export const updateLightReach = reach => ({
	type: UPDATE_LIGHT_REACH,
	reach
});

export const updateLightXIncrement = xIncrement => ({
	type: UPDATE_LIGHT_X_INCREMENT,
	xIncrement
});

export const updateLightYIncrement = yIncrement => ({
	type: UPDATE_LIGHT_Y_INCREMENT,
	yIncrement
});
