<script lang="ts">
	import meta from '$lib/meta/site_info';
</script>

<div class="profile-card">
	<div class="profile-img">
		<img src="/assets/imgs/avatar.png" alt="avatar" />
	</div>
	<h4 class="name">Vu Nguyen Xuan</h4>
	<div class="role">Full-stuck Developer</div>
	<ul class="social-link">
		<li>
			<a href={meta.github}>
				<i class="fab fa-facebook-f" />
			</a>
		</li>
		<li>
			<a href={meta.github}>
				<i class="fab fa-github" />
			</a>
		</li>
		<li>
			<a href={`mailto:${meta.github}`}>
				<i class="far fa-envelope" />
			</a>
		</li>
	</ul>
	<div class="description">
		Hi there! <br />
		I like to write code and study new things everyday. This site is created to note about what I learn
		and my experience. I'm a Vimmer and Starcraft player.<br />
		Feel free to contact me! <br />
		Have a nice day. 🍺 <br />
	</div>
</div>

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
	}

	.social-link {
		list-style: none;
		display: flex;
		padding: 0;
		gap: var(--spacing-500);
		margin: var(--spacing-400) 0;
	}

	.social-link i {
		font-size: var(--font-size-600);
	}

	.social-link i.fa-facebook-f {
		color: var(--color-blue-200);
	}

	.social-link i.fa-envelope {
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

		.social-link a {
			width: 1rem;
			height: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: var(--spacing-300);
			border-radius: 50%;
		}

		.social-link a:hover {
			box-shadow: var(--shadow-inset-200);
		}
	}
</style>
