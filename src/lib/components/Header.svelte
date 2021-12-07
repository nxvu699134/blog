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
	<div>test</div>
	<Button class="toggle-btn" on:click={onToggle}>+</Button>
	<nav>
		<ul id="navigation" class="navigation" class:hide={!isToggled}>
			{#each items as { path, label }}
				<li class:active={curPath == path} on:click={onToggle}><a href={path}>{label}</a></li>
			{/each}
		</ul>
	</nav>
</header>
<div class="backdrop" class:hide={!isToggled} />

<style>
	header {
		box-shadow: var(--shadow-outset-200);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 4rem;
		border-radius: var(--border-radius);
		position: relative;
		--padding-x: 1rem;
		padding: 0 var(--padding-x);
	}

	header :global(.toggle-btn) {
		position: absolute;
		top: auto;
		bottom: auto;
		right: var(--padding-x);
		z-index: 9999;
	}

	.navigation {
		transition: opacity 0.3s linear;
		background-color: var(--color-main-bg);
		position: fixed;
		top: 0;
		right: 1rem;
		padding: min(10vh, 10rem) 1em;
		font-size: 1.125rem;
		box-shadow: var(--shadow-outset-200);
		gap: 0.75em;
		min-width: 6rem;
		width: 30%;
		z-index: 9000;
		opacity: 1;
	}

	.navigation.hide {
		opacity: 0;
		box-shadow: var(--shadow-inset-200);
	}

	.navigation li {
		list-style: none;
		padding: 0.5rem 1.5rem;
		border-radius: var(--border-radius);
	}

	.navigation li.active {
		box-shadow: var(--shadow-inset-200);
	}

	.navigation li a {
		display: block;
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
		transition: opacity 0.3s linear;
	}

	.backdrop.hide {
		opacity: 0;
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

		.navigation li {
			transition: box-shadow 0.2s linear;
		}

		.backdrop {
			display: none;
		}
	}
</style>
