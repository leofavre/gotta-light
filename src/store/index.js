import { behaviour } from "../components/behaviour/reducer";
import { light } from "../components/light/reducer";

const app = Redux.combineReducers({
	behaviour,
	light
});

export const store = Redux.createStore(app, initialState);