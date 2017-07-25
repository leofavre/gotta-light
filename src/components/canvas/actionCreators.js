import { RESIZE_CANVAS } from "./constants";

export const resizeCanvas = (width, height) => ({
	type: RESIZE_CANVAS,
	width,
	height
});