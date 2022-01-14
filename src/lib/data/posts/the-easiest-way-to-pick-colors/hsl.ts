export type HSL = {
	h: number;
	s: number;
	l: number;
};

export const hslToString = (c: HSL) => {
	return `hsl(${c.h},${c.s}%,${c.l}%)`;
};
