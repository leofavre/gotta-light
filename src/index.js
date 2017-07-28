import "./data/banner.txt";

import { store } from "./store/index";
import { updateLightReach } from "./components/light/actionCreators";
import { updatePhraseGap } from "./components/phrase/actionCreators";
import { updateRayAperture, updateRayReach } from "./components/ray/actionCreators";
import { Canvas } from "./components/canvas/Canvas";
import { LightAnimator } from "./components/light/LightAnimator";
import { LightSource } from "./components/light/LightSource";
import { Slider } from "./components/slider/Slider";

import { resizeCanvas } from "./components/canvas/actionCreators";

const canvasElement = document.getElementById("canvas"),
	canvasContext = canvasElement.getContext("2d");

store.subscribe(Canvas.render(canvasElement, canvasContext));
store.subscribe(LightAnimator.update(canvasElement));
store.subscribe(LightSource.render(canvasContext));

const phraseGapInput = document.getElementById("phrase-gap-input"),
	lightReachInput = document.getElementById("light-reach-input"),
	rayApertureInput = document.getElementById("ray-aperture-input"),
	rayReachInput = document.getElementById("ray-reach-input");

store.subscribe(Slider.bind(phraseGapInput, "phrase.gap", updatePhraseGap));
store.subscribe(Slider.bind(lightReachInput, "light.reach", updateLightReach));
store.subscribe(Slider.bind(rayApertureInput, "ray.aperture", updateRayAperture));
store.subscribe(Slider.bind(rayReachInput, "ray.reach", updateRayReach));

store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight));
