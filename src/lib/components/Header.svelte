<script>
	import { page } from '$app/stores';
	import Button from '../ui/Button.svelte';
	let isToggled = false;
	$: curPath = $page.path;

	const onToggle = () => {
		isToggled = !isToggled;
	};

	const items = [
		{ path: '/', label: 'Home' },
		{ path: '/posts', label: 'Posts' },
		{ path: '/about', label: 'About' }
	];
</script>

<header>
	<div class="avatar">
		<a href="/">
			<img src="/assets/imgs/avatar.png" alt="avatar" />
		</a>
	</div>
	<Button class="toggle-btn" on:click={onToggle}>+</Button>
	<nav>
		<ul id="navigation" class="navigation" class:hide={!isToggled}>
			{#each items as { path, label }}
				<a class:active={curPath == path} on:click={onToggle} href={path}>{label}</a>
			{/each}
		</ul>
	</nav>
</header>
<div class="backdrop" class:hide={!isToggled} on:click={onToggle} />

<style>
	header {
		--header-height: 4rem;
		box-shadow: var(--shadow-outset-200);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--header-height);
		border-radius: var(--border-radius);
		position: relative;
		--padding-x: var(--spacing-400);
		padding: 0 var(--padding-x);
		margin-bottom: var(--spacing-500);
	}

	header :global(.toggle-btn) {
		position: absolute;
		top: auto;
		bottom: auto;
		right: var(--padding-x);
		z-index: 9999;
	}

	.avatar {
		width: calc(var(--header-height) - 0.5rem);
		height: calc(var(--header-height) - 0.5rem);
		border-radius: 50%;
		padding: var(--spacing-100);
		box-shadow: var(--shadow-inset-200);
	}

	.avatar a {
		display: flex;
		width: 100%;
		height: 100%;
		border: 1px solid var(--color-border);
		overflow: hidden;
		border-radius: 50%;
	}

	.avatar img {
		width: 100%;
		height: 100%;
	}

	.navigation {
		background-color: var(--color-main-bg);
		position: fixed;
		top: 0;
		right: 1rem;
		padding: min(10vh, 10rem) var(--spacing-400);
		font-size: 1.125rem;
		box-shadow: var(--shadow-outset-200);
		display: flex;
		flex-direction: column;
		gap: 0.75em;
		min-width: 6rem;
		width: 30%;
		z-index: 9000;
		opacity: 1;
		transition: opacity 0.3s linear, z-index 0.3s linear;
	}

	.navigation.hide {
		opacity: 0;
		box-shadow: var(--shadow-inset-200);
		z-index: -1;
	}

	.navigation a {
		padding: 0.75rem 1.5rem;
		border-radius: var(--border-radius);
		font-size: var(--font-size-500);
	}

	.navigation a.active {
		box-shadow: var(--shadow-inset-200);
	}

	.backdrop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: var(--color-main-bg);
		z-index: 2000;
		filter: blur(1rem);
		opacity: 0.8;
		transition: opacity 0.3s linear, z-index 0.3s linear;
	}

	.backdrop.hide {
		opacity: 0;
		z-index: -1;
	}

	@media only screen and (min-width: 40em) {
		header :global(.toggle-btn) {
			display: none;
		}

		.navigation,
		.navigation.hide {
			all: unset;
			display: flex;
		}

		.navigation a {
			transition: box-shadow 0.2s linear;
		}

		.backdrop {
			display: none;
		}
	}
</style>
