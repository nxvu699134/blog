<script lang="ts">
	let outsideClass = '';
	export { outsideClass as class };

	export let href: string = null;
	export let leftIcon: string = null;
	export let rightIcon: string = null;
	export let outline: boolean = false;

	const classNames = `${outsideClass}`;
</script>

<a {href} class={classNames} class:outline class:primary={!outline}>
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
	@use '../css/responsive.scss' as *;

	a {
		border-radius: 100px;
		width: 220px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-200) 0;
		font-size: var(--font-size-600);
		border: 1px solid var(--color-primary-700);
	}

	a.primary {
		color: white;
		background: linear-gradient(65deg, var(--color-primary-500) 0%, var(--color-primary-300) 100%);
		box-shadow: 0px 1px 2px var(--color-primary-400), inset 0 1px 0 0 var(--color-primary-300);

		&:hover {
			background: var(--color-primary-300);
		}
	}

	a.outline {
		color: var(--color-primary-700);
		background: var(--color-primary-000);
		box-shadow: 0px 1px 2px var(--color-primary-400);

		&:hover {
			background: var(--color-primary-100);
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
