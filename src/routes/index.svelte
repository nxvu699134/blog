<script context="module">
	import { postMetas } from '$lib/data/internalResource';
	export function load() {
		return {
			props: {
				posts: postMetas
			}
		};
	}
</script>

<script lang="ts">
	import LandingButton from '$lib/ui/LandingButton.svelte';
	import Quote from '$lib/ui/Quote.svelte';
	import Blob from '$lib/ui/Blob.svelte';
	import CardsLayout from '$lib/components/CardsLayout.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import Section from '$lib/ui/Section.svelte';
	import Button from '$lib/ui/Button.svelte';
	import SeoTag from '$lib/components/SeoTag.svelte';

	export let posts: IPostMeta[] = [];
</script>

<SeoTag title="Home" />
<div class="banner">
	<h2 class="greeting">Hi there, I'm Vu !</h2>
	<p class="quote">
		I like coding. I like beauty. <br /> I like coding to make beautiful things.
	</p>
	<div class="action-container">
		<LandingButton href="/blog" leftIcon="fas fa-pencil-alt">Blog</LandingButton>
		<LandingButton href="/about" leftIcon="fas fa-user-secret" outline>About</LandingButton>
	</div>
</div>

<Section>
	<Quote author="Abathur">
		Never perfect. Perfection goal that changes. Never stops moving. Can chase, cannot catch.
	</Quote>
	<div id="profile">
		<div class="content">
			<h3>I'm a Full-stuck developer, who aim to build things that perfect</h3>
			<p>
				Maybe I just looks like a cat chasing my damn "perfection" tail. I'm a Vimmer also a
				Starcraft player. Feel free to contact me!<br />
				Have a nice day. 🍺
			</p>
		</div>
		<div class="avatar">
			<Blob option={1} opacity={0.3} class="blob" />
			<Blob option={3} opacity={0.3} class="blob" />
			<Blob option={5} opacity={0.3} class="blob" />
			<img width="200" height="200" src="/assets/imgs/avatar.png" alt="avatar" />
		</div>
	</div>
</Section>

<Section title="Recent posts">
	<CardsLayout class="post-list">
		{#each posts as post}
			<PostCard data={post} />
		{/each}
	</CardsLayout>
	<Button href="/blog" size="lg" rightIcon="fas fa-angle-double-right">More Posts</Button>
</Section>

<style lang="scss">
	@use '../lib/css/utils.scss' as *;
	@use '../lib/css/animation.scss' as *;

	.banner {
		margin-top: var(--spacing-600);
		margin-bottom: var(--spacing-900);

		.greeting {
			text-align: center;
			color: var(--color-text-primary);
		}

		.quote {
			margin-top: var(--spacing-400);
			color: var(--color-text-primary);
			text-align: center;
			font-size: var(--font-size-600);
			font-family: var(--font-heading);
		}
	}

	.action-container {
		display: flex;
		flex-flow: column;
		align-items: center;
		margin-top: var(--spacing-600);
		@include tmp-flex-row-gap(var(--spacing-400));
	}

	#profile {
		display: flex;
		flex-flow: column;
		align-items: center;
		margin-top: var(--spacing-400);
		width: 100%;
		overflow: hidden; /* cuz when avatar spin thats overflow the profile container */
	}

	$blobSize: 256px;

	#profile .avatar {
		position: relative;
		width: $blobSize;
		height: $blobSize;
		min-width: $blobSize;
		display: flex;
		justify-content: center;
		align-items: center;

		:global(.blob) {
			width: $blobSize;
			fill: var(--color-text-primary-disable);
			position: absolute;
			z-index: -1;

			&:nth-of-type(3) {
				animation: spin 8s linear infinite;
			}

			&:nth-of-type(2) {
				animation: spin 6s linear infinite;
			}

			&:nth-of-type(1) {
				animation: spin 4s reverse linear infinite;
			}
		}

		img {
			border-radius: 50%;
		}
	}

	:global(.post-list) {
		margin-bottom: var(--spacing-600);
	}

	@include for-tablet-and-desktop {
		.banner {
			margin-top: var(--spacing-800);

			.quote {
				font-size: var(--font-size-700);
			}
		}

		.action-container {
			flex-flow: row;
			justify-content: center;
			@include tmp-flex-column-gap(var(--spacing-400));
		}

		#profile {
			flex-flow: row;
			justify-content: space-between;
		}

		#profile .content {
			max-width: 512px;
		}
	}

	@include for-dark-mode {
		#profile .avatar img {
			filter: brightness(90%);
		}
	}
</style>
