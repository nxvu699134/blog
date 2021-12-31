<script lang="ts">
	import { colorScheme } from '$lib/states/global';

	const toggleMode = () => {
		$colorScheme = $colorScheme === 'light' ? 'dark' : 'light';
		localStorage.setItem('color-scheme', $colorScheme);
	};
</script>

<button
	on:click={toggleMode}
	class:light={$colorScheme === 'light'}
	class:dark={$colorScheme === 'dark'}
>
	<i class="fas fa-cloud-moon moon" />
	<i class="fas fa-sun sun" />
</button>

<style lang="scss">
	button {
		background: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: var(--font-size-600);
		position: relative;
		overflow: hidden;
		width: 1.75em;
		height: 1.75em;

		i {
			transition: transform 0.4s ease-in;
			position: absolute;
			text-shadow: 0 0 10px currentcolor;

			&.sun {
				color: var(--color-yellow-300);
			}

			&.moon {
				color: var(--color-primary-900);
			}
		}
	}

	button.light {
		i.moon {
			transform: translateY(0);
		}

		i.sun {
			transform: translateY(-200%);
		}
	}

	button.dark {
		i.moon {
			transform: translateY(200%);
		}

		i.sun {
			transform: translateY(0);
		}
	}
</style>
