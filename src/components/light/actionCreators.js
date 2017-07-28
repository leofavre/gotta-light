import { TOGGLE_LIGHT_AUTOMATIC_MOVEMENT, UPDATE_LIGHT_COORD, UPDATE_LIGHT_REACH } from "./constants";

export const toggleLightAutomaticMovement = () => ({
	type: TOGGLE_LIGHT_AUTOMATIC_MOVEMENT
});

export const updateLightCoord = (x, y) => ({
	type: UPDATE_LIGHT_COORD,
	coord: [x, y]
});

export const updateLightReach = reach => ({
	type: UPDATE_LIGHT_REACH,
	reach
});