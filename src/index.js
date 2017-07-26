import "./data/banner.txt";

import { store } from "./store/index";
import { resizeCanvas } from "./components/canvas/actionCreators";
import { updateLightReach, toggleLightAutomaticMovement } from "./components/light/actionCreators";
import { updatePhraseGap } from "./components/phrase/actionCreators";
import { updateRayAperture, updateRayReach } from "./components/ray/actionCreators";
import { Canvas } from "./components/canvas/container";
import { Light } from "./components/light/container";
import { Controls } from "./components/controls/container";

const parentElement = document.getElementById("root"),
	lightElement = document.getElementById("light"),
	phraseGapInput = document.getElementById("phrase-gap-input"),
	lightReachInput = document.getElementById("light-reach-input"),
	rayApertureInput = document.getElementById("ray-aperture-input"),
	rayReachInput = document.getElementById("ray-reach-input");

const controlsBindings = [{
	input: phraseGapInput,
	action: updatePhraseGap,
	stateProp: "phrase.gap"
}, {
	input: lightReachInput,
	action: updateLightReach,
	stateProp: "light.reach"
}, {
	input: rayApertureInput,
	action: updateRayAperture,
	stateProp: "ray.aperture"
}, {
	input: rayReachInput,
	action: updateRayReach,
	stateProp: "ray.reach"
}];

window.addEventListener("resize", evt =>
	store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight)));

parentElement.addEventListener("click", evt =>
	store.dispatch(toggleLightAutomaticMovement()));

store.subscribe(Canvas.update(parentElement));
store.subscribe(() => Light.update(parentElement, lightElement));
store.subscribe(Controls.update(controlsBindings));

store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight));
