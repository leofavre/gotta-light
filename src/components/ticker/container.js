export const Ticker = (function() {
	let animationFrame,
		tickers = {};

	const add = (id, callback, start, increment, reset) => {
		remove(id);
		_update(id, callback, start, increment, reset);
	};

	const remove = id => {
		delete tickers[id];
	};

	const start = () => {
		animationFrame = window.requestAnimationFrame(() => {
			Object.keys(tickers).forEach(id => _incrementAndRunCallBack(id, tickers[id]));
			start();
		});
	};

	const stop = () => window.cancelAnimationFrame(animationFrame);

	const _update = (id, callback, start = 0, increment = 1, reset = arg => arg, value = start) => {
		tickers[id] = {
			callback,
			start,
			increment,
			reset,
			value
		};
	};

	const _incrementAndRunCallBack = (id, ticker) => {
		let { callback, start, increment, reset, value } = ticker;
		callback(value);
		value = value + increment;
		value = reset(value);
		_update(id, callback, start, increment, reset, value);
	};

	return {
		add,
		remove,
		start,
		stop
	};
})();
