import "./data/banner.txt";

import { store } from "./store/index";
import { updateLightReach, toggleLightOrigin, updateLightXIncrement, updateLightYIncrement } from "./components/light/actionCreators";
import { updatePhraseGap } from "./components/phrase/actionCreators";
import { updateRayAperture, updateRayReach } from "./components/ray/actionCreators";
import { Canvas } from "./components/canvas/Canvas";
import { LightAnimator } from "./components/light/LightAnimator";
import { LightOrigin } from "./components/light/LightOrigin";
import { Control } from "./components/control/Control";

import { resizeCanvas } from "./components/canvas/actionCreators";

const canvasElement = document.getElementById("canvas"),
	canvasContext = canvasElement.getContext("2d");

store.subscribe(Canvas.render(canvasElement, canvasContext));
store.subscribe(LightAnimator.update(canvasElement));
store.subscribe(LightOrigin.render(canvasContext));

const phraseGapInput = document.getElementById("phrase-gap-input"),
	lightReachInput = document.getElementById("light-reach-input"),
	rayApertureInput = document.getElementById("ray-aperture-input"),
	rayReachInput = document.getElementById("ray-reach-input"),
	lightOriginInput = document.getElementById("light-showOrigin-input"),
	lightXIncrementInput = document.getElementById("light-xIncrement-input"),
	lightYIncrementInput = document.getElementById("light-yIncrement-input");

store.subscribe(Control.bind(phraseGapInput, "phrase.gap", updatePhraseGap));
store.subscribe(Control.bind(lightReachInput, "light.reach", updateLightReach));
store.subscribe(Control.bind(rayApertureInput, "ray.aperture", updateRayAperture));
store.subscribe(Control.bind(rayReachInput, "ray.reach", updateRayReach));
store.subscribe(Control.bind(lightOriginInput, "light.showOrigin", toggleLightOrigin));
store.subscribe(Control.bind(lightXIncrementInput, "light.xIncrement", updateLightXIncrement));
store.subscribe(Control.bind(lightYIncrementInput, "light.yIncrement", updateLightYIncrement));

store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight));
