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
	import LandingButton from '$lib/ui/LandingButton.svelte';
</script>

<div class="banner">
	<h2 class="greeting">Hi there, I'm Vu !</h2>
	<h4 class="quote">
		I like coding. I like beauty. <br /> I like coding to make beautiful things.
	</h4>
	<div class="action-container">
		<LandingButton href="/blog" leftIcon="fas fa-pencil-alt">Blog</LandingButton>
		<LandingButton href="/about" leftIcon="fas fa-pencil-alt" outline>About</LandingButton>
	</div>
</div>

<style lang="scss">
	@use '../lib/css/responsive.scss' as *;

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

	.action-container {
		display: flex;
		flex-flow: column;
		align-items: center;
		row-gap: var(--spacing-400);
		margin-top: var(--spacing-600);
	}

	@include for-tablet-and-desktop {
		.action-container {
			flex-flow: row;
			justify-content: center;
			column-gap: var(--spacing-400);
		}
	}
</style>
