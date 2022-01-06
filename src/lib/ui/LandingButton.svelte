<script lang="ts">
	import { colorScheme } from '$lib/states/global';

	let outsideClass = '';
	export { outsideClass as class };

	export let href: string = null;
	export let leftIcon: string = null;
	export let rightIcon: string = null;
	export let outline: boolean = false;

	const classNames = `${outsideClass}`;
</script>

<a
	{href}
	class={classNames}
	class:outline
	class:primary={!outline}
	class:dark={$colorScheme === 'dark'}
>
	{#if leftIcon}
		<i class={`left-icon ${leftIcon}`} />
	{/if}
	<slot />
	{#if rightIcon}
		<i class={`right-icon ${rightIcon}`} />
	{/if}
</a>

<style lang="scss">
	@use 'sass:color';
	@use '../css/utils.scss' as *;

	a {
		--btn-bg-primary: var(--color-primary-700);
		--btn-highlight-primary: var(--color-primary-500);

		--btn-bg-primary-outline: var(--color-primary-000);
		--btn-highlight-primary-outline: var(--color-primary-100);

		border-radius: 100px;
		width: 220px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-200) 0;
		font-size: var(--font-size-600);
		border: 1px solid var(--color-text-primary);
		transition: background-color 0.2s ease-in-out;
	}

	a.dark {
		--btn-bg-primary: var(--color-primary-600);
		--btn-highlight-primary: var(--color-primary-500);

		--btn-bg-primary-outline: var(--color-primary-1000);
		--btn-highlight-primary-outline: var(--color-primary-900);
	}

	a.primary {
		color: var(--color-white);
		background-color: var(--btn-bg-primary);
		box-shadow: 0px 1px 2px var(--btn-bg-primary), inset 0 1px 0 0 var(--btn-highlight-primary);

		&:hover {
			background: var(--btn-highlight-primary);
		}
	}

	a.outline {
		color: var(--color-text-primary);
		background: var(--btn-bg-primary-outline);
		box-shadow: 0px 1px 2px var(--btn-bg-primary);

		&:hover {
			background: var(--btn-highlight-primary-outline);
		}
	}

	a i.left-icon {
		margin-right: var(--spacing-200);
	}

	a i.right-icon {
		margin-left: var(--spacing-200);
	}

	@include for-tablet-and-desktop {
		a {
			padding: var(--spacing-300) 0;
		}
	}
</style>
