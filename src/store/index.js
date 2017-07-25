import { initialState } from "../data/initialState";

import { canvas } from "../components/canvas/reducer";
import { light } from "../components/light/reducer";
import { phrase } from "../components/phrase/reducer";
import { ray } from "../components/ray/reducer";

const app = Redux.combineReducers({
	canvas,
	light,
	phrase,
	ray
});

export const store = Redux.createStore(app, initialState);