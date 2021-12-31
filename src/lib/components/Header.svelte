<script lang="ts">
	import { page } from '$app/stores';
	import meta from '$lib/meta/site_info';
	import ColorSchemeButton from '$lib/ui/ColorSchemeButton.svelte';

	let isToggled = false;

	const onToggle = () => {
		isToggled = !isToggled;
	};

	const items = [
		{ path: '/', label: 'Home' },
		{ path: '/blog', label: 'Blog' },
		{ path: '/about', label: 'About' }
	];
</script>

<header>
	<div class="blur-filter" />
	<i class={`${isToggled ? 'fas fa-times' : 'fas fa-bars'} toggle-btn`} on:click={onToggle} />
	<nav>
		<ul id="navigation" class:hide={!isToggled}>
			{#each items as { path, label }}
				<a class:active={$page.url.pathname == path} on:click={onToggle} href={path}>
					{label}
				</a>
			{/each}
		</ul>
	</nav>
	<div class="social-links">
		<a href={`mailto:${meta.email}`}>
			<i class="far fa-envelope" />
		</a>
		<a href={meta.github}>
			<i class="fab fa-github" />
		</a>
		<a href={meta.facebook}>
			<i class="fab fa-facebook-f" />
		</a>
		<ColorSchemeButton />
	</div>
</header>
<div class="backdrop" class:hide={!isToggled} on:click={onToggle} />

<style lang="scss">
	@use '../css/responsive' as *;

	header {
		--header-height: 4rem;
		display: flex;
		align-items: center;
		height: var(--header-height);
		position: sticky;
		top: 0;
		z-index: 9000;
	}

	header .blur-filter {
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		backdrop-filter: blur(2rem);
		-webkit-backdrop-filter: blur(2rem);
		z-index: -1;
	}

	.page-logo {
		display: none;
	}

	header .toggle-btn {
		position: absolute;
		top: auto;
		bottom: auto;
		right: 0;
		font-size: var(--font-size-700);
		color: var(--color-text-primary);
		z-index: 9999;
	}

	#navigation {
		background-color: var(--color-main-bg);
		position: fixed;
		top: 0;
		right: 0;
		padding: min(10vh, 10rem) var(--spacing-400);
		min-width: 10rem;
		width: min(48%, 12rem);
		height: 100%;
		margin: 0;
		transition: transform 0.3s ease-in-out;
		transform: translateX(0);
		display: flex;
		flex-direction: column;

		@include tmp-flex-row-gap(var(--spacing-200));

		&.hide {
			transform: translateX(100%);
		}
	}

	#navigation a {
		padding: var(--spacing-300) var(--spacing-400);
		border-radius: var(--border-radius);
		font-size: var(--font-size-500);

		&.active {
			background-color: var(--color-highlight);
		}
	}

	.social-links {
		display: flex;
		@include tmp-flex-column-gap(var(--spacing-200));

		a {
			width: 1.75em;
			height: 1.75em;
			transition: border-color 0.3s ease-in-out;
			color: var(--color-text-primary);
			font-size: var(--font-size-600);
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px dashed transparent;

			&:hover {
				border-color: var(--color-text-primary);
			}
		}
	}

	.backdrop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-backdrop);
		z-index: 2000;
		filter: blur(1rem);
		opacity: 0.8;
		transition: opacity 0.3s linear, z-index 0.3s linear;

		&.hide {
			opacity: 0;
			z-index: -1;
		}
	}

	@include for-tablet-and-desktop {
		header {
			justify-content: space-between;
		}

		header :global(.toggle-btn) {
			display: none;
		}

		.page-logo {
			display: block;
		}

		#navigation,
		#navigation.hide {
			all: unset;
			display: flex;
			@include tmp-flex-column-gap(var(--spacing-400));
		}

		#navigation a {
			border-radius: 0;
			padding: var(--spacing-300) var(--spacing-200);
			transition: border-color 0.2s ease-in-out;
			color: var(--color-text-primary);
			border-bottom: 2px dashed var(--color-text-primary-disable);

			&.active {
				background-color: transparent;
				border-bottom-color: var(--color-text-primary);
			}

			&:hover {
				border-bottom-color: var(--color-text-primary);
			}
		}

		.backdrop {
			display: none;
		}
	}
</style>
