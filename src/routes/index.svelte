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
	import Quote from '$lib/ui/Quote.svelte';
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

<div class="profile">
	<Quote class="public-quote" author="Abathur">
		Never perfect. Perfection goal that changes. Never stops moving. Can chase, cannot catch.
	</Quote>

	<div class="description">
		<div class="content">
			<h4>I'm a Full-stuck developer, who aim to build things that perfect</h4>
			<p>
				Maybe I just looks like a cat chasing my damn "perfection" tail. I'm a Vimmer also a
				Starcraft player. Feel free to contact me!<br />
				Have a nice day. 🍺
			</p>
		</div>
		<div class="avatar-container">
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
		color: var(--color-primary-800);
	}

	.quote {
		margin-top: var(--spacing-400);
		color: var(--color-primary-700);
		text-align: center;
	}

	.action-container {
		display: flex;
		flex-flow: column;
		align-items: center;
		row-gap: var(--spacing-400);
		margin-top: var(--spacing-600);
	}

	.profile {
		display: flex;
		flex-flow: column;
		align-items: center;
		margin-top: var(--spacing-400);

		.description {
			display: flex;
			flex-flow: column;
			align-items: center;
			margin: var(--spacing-400) var(--spacing-200);
		}

		.avatar-container {
			margin-top: var(--spacing-400);
			img {
				height: 96px;
			}
		}
	}

	@include for-tablet-and-desktop {
		.banner {
			margin-top: var(--spacing-800);
		}

		.action-container {
			flex-flow: row;
			justify-content: center;
			column-gap: var(--spacing-400);
		}
	}
</style>
