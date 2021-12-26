<script lang="ts">
	import { page } from '$app/stores';
	import meta from '$lib/meta/site_info';
	import ButtonIcon from '$lib/ui/ButtonIcon.svelte';

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
	<a class="page-logo" href={meta.siteUrl}> Home </a>
	<i class={`${isToggled ? 'fas fa-times' : 'fas fa-bars'} toggle-btn`} on:click={onToggle} />
	<nav>
		<ul id="navigation" class:hide={!isToggled}>
			{#each items as { path, label }}
				<a class:active={$page.path == path} on:click={onToggle} href={path}>
					{label}
				</a>
			{/each}
		</ul>
	</nav>
	<div class="social-links">
		<ButtonIcon icon="fab fa-facebook-f" href={meta.facebook} size="lg" />
		<ButtonIcon icon="fab fa-github" href={meta.github} size="lg" />
		<ButtonIcon icon="far fa-envelope" href={`mailto:${meta.email}`} size="lg" />
	</div>
</header>
<div class="backdrop" class:hide={!isToggled} on:click={onToggle} />

<style lang="scss">
	@use '../css/responsive' as *;

	header {
		--header-height: 4rem;
		--padding-x: var(--spacing-400);
		display: flex;
		align-items: center;
		height: var(--header-height);
		padding: 0 var(--padding-x);
		margin-bottom: var(--spacing-500);
		position: sticky;
		top: 0;
		z-index: 9000;
	}

	.page-logo {
		display: none;
	}

	header .toggle-btn {
		position: absolute;
		top: auto;
		bottom: auto;
		right: var(--padding-x);
		font-size: var(--font-size-700);
		z-index: 9999;
	}

	#navigation {
		background-color: var(--color-main-bg);
		position: fixed;
		top: 0;
		right: 0;
		padding: min(10vh, 10rem) var(--spacing-400);
		display: flex;
		flex-direction: column;
		gap: 0.75em;
		min-width: 10rem;
		width: min(48%, 12rem);
		height: 100%;
		margin: 0;
		transition: transform 0.3s ease-in-out;
		transform: translateX(0);

		&.hide {
			transform: translateX(100%);
		}
	}

	#navigation a {
		padding: var(--spacing-300) var(--spacing-400);
		border-radius: var(--border-radius);
		font-size: var(--font-size-500);

		&.active {
			background-color: var(--color-grey-100);
		}
	}

	.backdrop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-grey-400);
		z-index: 2000;
		filter: blur(1rem);
		opacity: 0.8;
		transition: opacity 0.3s linear, z-index 0.3s linear;

		&.hide {
			opacity: 0;
			z-index: -1;
		}
	}

	.social-links {
		display: flex;
		column-gap: var(--spacing-200);
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
			column-gap: var(--spacing-400);
		}

		#navigation a {
			border-bottom: 2px dashed var(--color-border);
			border-radius: 0;
			padding: var(--spacing-300) var(--spacing-200);
			transition: border-color 0.2s ease-in-out;

			&.active {
				background-color: transparent;
				border-bottom-color: var(--color-primary-400);
			}

			&:hover {
				border-bottom-color: var(--color-primary-400);
			}
		}

		.backdrop {
			display: none;
		}
	}
</style>
