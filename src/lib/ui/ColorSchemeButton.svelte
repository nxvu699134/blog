<script lang="ts">
	import IconMoon from '~icons/ri/moon-clear-fill';
	import IconSun from '~icons/ri/sun-fill';

	const toggleMode = () => {
		const curScheme = document.documentElement.getAttribute('color-scheme');
		const nextScheme = curScheme === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('color-scheme', nextScheme);
		localStorage.setItem('color-scheme', nextScheme);
	};
</script>

<button on:click={toggleMode} aria-label="Button toggle dark and light mode">
	<IconMoon class="moon" />
	<IconSun class="sun" />
</button>

<style lang="scss">
	@use '../css/utils.scss' as *;

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

		:global(.moon),
		:global(.sun) {
			transition: transform 0.4s ease-in;
			position: absolute;
			filter: drop-shadow(0 0 4px currentcolor) brightness(1.2);
		}

		:global(.moon) {
			color: var(--color-primary-900);
			transform: translateY(0);
		}

		:global(.sun) {
			color: var(--color-yellow-300);
			transform: translateY(-200%);
		}
	}

	@include for-dark-mode {
		button {
			:global(.moon) {
				transform: translateY(200%);
			}

			:global(.sun) {
				transform: translateY(0);
			}
		}
	}
</style>
