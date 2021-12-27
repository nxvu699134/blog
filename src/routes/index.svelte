<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/posts.json?limit=4');

		if (res.status == 200) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(await res.json())
		};
	}
</script>

<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
</script>

<div class="banner">
	<h2 class="greeting">Hi there, I'm Vu !</h2>
	<h4 class="quote">
		I like coding. I like beauty. <br /> I like coding to make beautiful things.
	</h4>
	<div class="action-container">
		<Button>test</Button>
	</div>
</div>

<style lang="scss">
	.banner {
		color: var(--color-primary-800);
		margin-top: var(--spacing-800);
	}

	.greeting {
		text-align: center;
	}

	.quote {
		margin-top: var(--spacing-400);
		text-align: center;
	}
</style>
