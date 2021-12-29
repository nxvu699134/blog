import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export type ColorScheme = 'dark' | 'light';
export const colorScheme: Writable<ColorScheme> = writable<ColorScheme>('light');
