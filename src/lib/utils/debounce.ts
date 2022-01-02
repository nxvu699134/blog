export const debounce = (callback: Function, wait: number): Function => {
	let timerId: number | NodeJS.Timeout;

	return (...args: any[]) => {
		clearTimeout(timerId as number);
		timerId = setTimeout(() => callback(...args), wait);
	};
};
