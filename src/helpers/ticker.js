export const Ticker = (function() {
	let animationFrame,
		tickers = {},
		on = {
			beforeEvery: [],
			afterEvery: [],
			tick: []
		};

	const add = (id, start, increment, reset) => {
		remove(id);
		_update(id, start, increment, reset);
	};

	const remove = id => {
		delete tickers[id];
	};

	const onBeforeEvery = callback => on.beforeEvery.push(callback);

	const onAfterEvery = callback => on.afterEvery.push(callback);

	const onTick = callback => on.tick.push(callback);

	const start = () => {
		console.log("------------" + animationFrame + "-----------------");
		window.cancelAnimationFrame(animationFrame);

		animationFrame = window.requestAnimationFrame(() => {
			_doTickCycle();
			start();
		});
	};

	const stop = () => window.cancelAnimationFrame(animationFrame);

	const _doTickCycle = () => {
		on.beforeEvery.forEach(callback => callback());

		let values = {};

		Object.keys(tickers).forEach(id => {
			let ticker = tickers[id],
				newValue = _increment(ticker),
				{ start, increment, reset } = ticker;

			values[id] = newValue;
			_update(id, start, increment, reset, newValue);
		});

		if (Object.keys(values).length > 0) {
			on.tick.forEach(callback => callback(values));
		}

		on.afterEvery.forEach(callback => callback());
	};

	const _increment = ticker => {
		let { increment, reset, value } = ticker;
		value = value + increment;
		value = reset(value);
		return value;
	};

	const _update = (id, start = 0, increment = 1, reset = arg => arg, value = start) => {
		tickers[id] = { start, increment, reset, value };
	};

	return {
		add,
		remove,
		onBeforeEvery,
		onAfterEvery,
		onTick,
		start,
		stop
	};
})();
