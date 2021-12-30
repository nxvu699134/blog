<script context="module">
	/* export async function load({ fetch }) { */
	/*   const res = await fetch('/api/posts.json?limit=4'); */
	/*  */
	/*   if (res.status == 200) { */
	/*     return { */
	/*       props: { */
	/*         posts: await res.json() */
	/*       } */
	/*     }; */
	/*   } */
	/*  */
	/*   return { */
	/*     status: res.status, */
	/*     error: new Error(await res.json()) */
	/*   }; */
	/* } */
</script>

<script lang="ts">
	import LandingButton from '$lib/ui/LandingButton.svelte';
	import Quote from '$lib/ui/Quote.svelte';
	import Blob from '$lib/ui/Blob.svelte';
</script>

<div class="banner">
	<h2 class="greeting">Hi there, I'm Vu !</h2>
	<h4 class="quote">
		I like coding. I like beauty. <br /> I like coding to make beautiful things.
	</h4>
	<div class="action-container">
		<LandingButton href="/blog" leftIcon="fas fa-pencil-alt">Blog</LandingButton>
		<LandingButton href="/about" leftIcon="fas fa-user-secret" outline>About</LandingButton>
	</div>
</div>

<div class="introduction">
	<Quote author="Abathur">
		Never perfect. Perfection goal that changes. Never stops moving. Can chase, cannot catch.
	</Quote>

	<div id="profile">
		<div class="content">
			<h4>I'm a Full-stuck developer, who aim to build things that perfect</h4>
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
			<img src="/assets/imgs/avatar.png" alt="avatar" />
		</div>
	</div>
</div>

<style lang="scss">
	@use '../lib/css/responsive.scss' as *;

	.banner {
		margin-top: var(--spacing-600);
		margin-bottom: var(--spacing-900);
	}

	.greeting {
		text-align: center;
		color: var(--color-text-primary);
	}

	.quote {
		margin-top: var(--spacing-400);
		color: var(--color-text-primary);
		text-align: center;
	}

	.action-container {
		display: flex;
		flex-flow: column;
		align-items: center;
		margin-top: var(--spacing-600);
		@include tmp-flex-row-gap(var(--spacing-400));
	}

	.introduction {
		display: flex;
		flex-flow: column;
		align-items: center;
		margin-top: var(--spacing-400);
	}

	#profile {
		display: flex;
		flex-flow: column;
		align-items: center;
		margin: var(--spacing-400) 0;
		padding: 0 var(--spacing-400);
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
			height: calc($blobSize/2);
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@include for-tablet-and-desktop {
		.banner {
			margin-top: var(--spacing-800);
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
</style>
