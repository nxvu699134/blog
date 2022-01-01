<script lang="ts">
	export let href: string = undefined;
</script>

<a {href}>
	<slot />
</a>

<style lang="scss">
	a {
		color: var(--color-text-primary);
		border-bottom: 2px solid var(--color-text-primary);
	}
</style>

