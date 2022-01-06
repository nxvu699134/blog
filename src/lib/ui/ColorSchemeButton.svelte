<script lang="ts">
	const toggleMode = () => {
		const curScheme = document.documentElement.getAttribute('color-scheme');
		const nextScheme = curScheme === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('color-scheme', nextScheme);
		localStorage.setItem('color-scheme', nextScheme);
	};
</script>

<button on:click={toggleMode} aria-label="Button toggle dark and light mode">
	<i class="fas fa-cloud-moon moon" />
	<i class="fas fa-sun sun" />
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

		i {
			transition: transform 0.4s ease-in;
			position: absolute;
			text-shadow: 0 0 10px currentcolor;

			&.sun {
				color: var(--color-yellow-300);
				transform: translateY(-200%);
			}

			&.moon {
				color: var(--color-primary-900);
				transform: translateY(0);
			}
		}
	}

	@include for-dark-mode {
		button {
			i.moon {
				transform: translateY(200%);
			}

			i.sun {
				transform: translateY(0);
			}
		}
	}
</style>
