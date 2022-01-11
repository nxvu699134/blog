<script lang="ts">
	import { page } from '$app/stores';
	import IconMenu from '~icons/ri/menu-fill';
	import IconClose from '~icons/ri/close-fill';
	import ColorSchemeButton from '$lib/ui/ColorSchemeButton.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';

	let isToggled = false;

	const onToggle = () => {
		isToggled = !isToggled;
	};

	const items = [
		{ path: '/', label: 'Home' },
		{ path: '/blog', label: 'Blog' },
		{ path: '/resume', label: 'Résumé' }
	];
</script>

<header>
	<div class="blur-filter" />
	<button class="toggle-btn" on:click={onToggle} aria-label="Toggle menu button">
		{#if isToggled}
			<IconClose />
		{:else}
			<IconMenu />
		{/if}
	</button>
	<nav>
		<ul id="navigation" class:hide={!isToggled}>
			{#each items as { path, label }}
				<li>
					<a class:active={$page.url.pathname == path} on:click={onToggle} href={path}>
						{label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="social-links">
		<SocialLink name="email" hasLabel={false} />
		<SocialLink name="github" hasLabel={false} />
		<SocialLink name="linkedin" hasLabel={false} />
		<SocialLink name="facebook" hasLabel={false} />
		<ColorSchemeButton />
	</div>
</header>
<div class="backdrop" class:hide={!isToggled} on:click={onToggle} />

<style lang="scss">
	@use '../css/utils' as *;

	header {
		--header-height: 4rem;
		display: flex;
		align-items: center;
		width: 100%;
		max-width: 1080px;
		height: var(--header-height);
		padding: 0 var(--spacing-400);
		position: sticky;
		top: 0;
		z-index: 9000;
	}

	header .blur-filter {
		height: var(--header-height);
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		backdrop-filter: blur(2rem);
		-webkit-backdrop-filter: blur(2rem);
		z-index: -1;
	}

	header .toggle-btn {
		position: absolute;
		top: auto;
		bottom: auto;
		right: var(--spacing-400);
		font-size: var(--font-size-700);
		color: var(--color-text-primary);
		background-color: transparent;
		padding: 0;
		display: flex;
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

		li {
			list-style-type: none;
			display: grid;
		}

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
	}

	.backdrop {
		position: fixed;
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

		header .toggle-btn {
			display: none;
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
