import { UPDATE_PHRASE_GAP, UPDATE_PHRASE_SOURCE } from "./constants";

export const updatePhraseGap = gap => ({
	type: UPDATE_PHRASE_GAP,
	gap
});

export const updatePhraseSource = source => ({
	type: UPDATE_PHRASE_SOURCE,
	source
});