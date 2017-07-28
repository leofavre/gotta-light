import { UPDATE_RAY_APERTURE, UPDATE_RAY_REACH } from "./constants";

export const updateRayAperture = aperture => ({
	type: UPDATE_RAY_APERTURE,
	aperture
});

export const updateRayReach = reach => ({
	type: UPDATE_RAY_REACH,
	reach
});