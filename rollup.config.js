import nodeResolve from "rollup-plugin-node-resolve";

export default {
	"entry": "./src/index.js",
	"dest": "./dist/index.js",
	"plugins": [nodeResolve()],
	"format": "es"
};