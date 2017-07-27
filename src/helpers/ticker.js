export const Ticker = (function() {
	let tickers = {},
		listeners = {
			before: new Map(),
			tick: new Map(),
			after: new Map()
		};

	const add = (id, start, increment, reset) => {
		remove(id);
		_update(id, start, increment, reset);
		return Ticker;
	};

	const remove = id => {
		delete tickers[id];
		return Ticker;
	};

	const on = (evtName, callback) => {
		if (listeners.hasOwnProperty(evtName)) {
			listeners[evtName].set(callback, callback);
		}
		return Ticker;
	};

	const off = (evtName, callback) => {
		if (listeners.hasOwnProperty(evtName)) {
			listeners[evtName].delete(callback);
		}
		return Ticker;
	};

	const _start = () => {
		window.requestAnimationFrame(() => {
			_tick();
			_start();
		});
	};

	const _tick = () => {
		listeners.before.forEach(callback => callback());
		listeners.tick.forEach(callback => callback(_getValues()));
		_incrementAndUpdateTickers();
		listeners.after.forEach(callback => callback());
	};

	const _getValues = () => {
		let result = {};
		Object.keys(tickers).forEach(id => result[id] = tickers[id].value);
		return result;
	};

	const _incrementAndUpdateTickers = () => {
		Object.keys(tickers).forEach(id => _incrementAndUpdateTicker(id, tickers[id]));
	};

	const _incrementAndUpdateTicker = (id, ticker) => {
		let newValue = _increment(ticker),
			{ start, increment, reset } = ticker;

		_update(id, start, increment, reset, newValue);
	};

	const _update = (id, start = 0, increment = 1, reset = arg => arg, value = start) => {
		tickers[id] = { start, increment, reset, value };
	};

	const _increment = ticker => {
		let { increment, reset, value } = ticker;
		value = value + increment;
		value = reset(value);
		return value;
	};

	_start();

	return {
		add,
		remove,
		on,
		off
	};
})();