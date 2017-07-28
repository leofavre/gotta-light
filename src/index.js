import "./data/banner.txt";

import { store } from "./store/index";
import { updateLightReach } from "./components/light/actionCreators";
import { updatePhraseGap } from "./components/phrase/actionCreators";
import { updateRayAperture, updateRayReach } from "./components/ray/actionCreators";
import { Canvas } from "./components/canvas/Canvas";
import { LightAnimator } from "./components/light/LightAnimator";
import { LightSource } from "./components/light/LightSource";
import { Controls } from "./components/controls/Controls";

import { resizeCanvas } from "./components/canvas/actionCreators";

const canvasElement = document.getElementById("canvas"),
	canvasContext = canvasElement.getContext("2d");
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

store.subscribe(Canvas.render(canvasElement, canvasContext));
store.subscribe(LightAnimator.render(canvasElement));
store.subscribe(LightSource.render(canvasContext));
store.subscribe(Controls.update(controlsBindings));

store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight));
