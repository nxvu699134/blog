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
	import meta from '$lib/meta/site_info';
	import ButtonIcon from '$lib/ui/ButtonIcon.svelte';
	import Section from '$lib/components/Section.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import Hoverable from '$lib/components/Hoverable.svelte';

	export let posts: IMetaPost[] = [];
</script>

<div class="profile-card">
	<div class="profile-img">
		<img src="/assets/imgs/avatar.png" alt="avatar" />
	</div>
	<h4 class="name">Vu Nguyen Xuan</h4>
	<div class="role">Full-stuck Developer</div>
	<ul class="social-link">
		<li>
			<Hoverable end="down-200" shape="square">
				<ButtonIcon class="fb" icon="fab fa-facebook-f" href={meta.facebook} size="lg" />
			</Hoverable>
		</li>
		<li>
			<Hoverable end="down-200" shape="square">
				<ButtonIcon icon="fab fa-github" href={meta.github} size="lg" />
			</Hoverable>
		</li>
		<li>
			<Hoverable end="down-200" shape="square">
				<ButtonIcon class="email" icon="far fa-envelope" href={`mailto:${meta.email}`} size="lg" />
			</Hoverable>
		</li>
	</ul>
	<div class="description">
		<div>Hi there!</div>
		<div>
			I like to write code and study new things everyday. This site is created to note about what I
			learn and my experience. I'm a Vimmer and Starcraft player.
		</div>
		<div>Feel free to contact me!</div>
		<div>Have a nice day. 🍺</div>
	</div>
</div>

<Section name="Recent posts">
	{#each posts as post}
		<PostCard data={post} />
	{/each}
</Section>

<style>
	.profile-card {
		width: 100%;
		box-shadow: var(--shadow-outset-200);
		border-radius: var(--border-radius);
		position: relative;
		padding: var(--spacing-400);
		--img-size: 9rem;
		--shift-size: calc(var(--img-size) / 1.5);
		margin-top: var(--shift-size);
		padding-top: var(--shift-size);
	}

	.profile-img {
		width: var(--img-size);
		height: var(--img-size);
		border-radius: 50%;
		box-shadow: var(--shadow-inset-200);
		overflow: hidden;
		padding: 1rem;
		border: 1px solid var(--color-border);
		position: absolute;
		top: -4rem;
		left: var(--spacing-500);
		background-color: var(--color-main-bg);
	}

	.profile-img img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 1px solid var(--color-border);
	}

	.name {
		margin-bottom: var(--spacing-200);
	}

	.role {
		font-size: var(--font-size-500);
		color: var(--color-text-bold);
	}

	.social-link {
		list-style: none;
		display: flex;
		padding: 0;
		gap: var(--spacing-500);
		margin: var(--spacing-400) 0;
	}

	.social-link :global(.fb) {
		color: var(--color-blue-200);
	}

	.social-link :global(.email) {
		color: var(--color-red-600);
	}

	.description {
		color: var(--color-text-alt);
		word-wrap: break-word;
		max-width: 40em;
		line-height: 1.5;
	}

	@media only screen and (min-width: 60em) {
		.profile-card {
			padding: var(--spacing-600);
			--img-size: 16rem;
			--shift-size: var(--spacing-700);
		}

		.profile-img {
			inset: 0 var(--spacing-600) 0 auto;
			margin: auto;
		}

		.social-link {
			gap: var(--spacing-300);
		}
	}
</style>
