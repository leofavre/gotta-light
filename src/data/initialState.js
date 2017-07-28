import { gottaLight } from "./phraseData";

const processPhraseData = arr =>
	arr.map(str => Array.from(str).map(value => parseInt(value) || 0));

export const initialState = {
	canvas: {
		height: window.innerHeight,
		width: window.innerWidth
	},
	light: {
		autoMove: true,
		coord: [
			Math.round(window.innerWidth / 3),
			Math.round(window.innerHeight / 3)
		],
		reach: 5,
	},
	phrase: {
		gap: 9,
		source: processPhraseData(gottaLight)
	},
	ray: {
		aperture: 12,
		reach: 80
	}
};