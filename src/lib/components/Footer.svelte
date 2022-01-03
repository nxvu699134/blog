<script lang="ts">
	import siteInfo from '$lib/meta/siteInfo';
	import Link from '$lib/ui/Link.svelte';
	import { colorScheme } from '$lib/states/global';
</script>

<footer class:dark={$colorScheme === 'dark'}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
		preserveAspectRatio="none"
		height="128px"
	>
		<defs>
			<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" stop-color="var(--color-bg1)" />
				<stop offset="100%" stop-color="var(--color-bg2)" />
			</linearGradient>
		</defs>
		<path
			fill="url(#gradient)"
			d="M0,160L60,170.7C120,181,240,203,360,208C480,213,600,203,720,165.3C840,128,960,64,1080,48C1200,32,1320,64,1380,80L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
		/>
	</svg>
	<div class="container">
		<div class="social-links">
			<a href={`mailto:${siteInfo.email}`} aria-label="Vu's email">
				<i class="far fa-envelope" />
			</a>
			<a href={siteInfo.github} aria-label="Vu's github">
				<i class="fab fa-github" />
			</a>
			<a href={siteInfo.facebook} aria-label="Vu's facbook">
				<i class="fab fa-facebook-f" />
			</a>
		</div>
		<p class="credit">
			Powered by <Link href="https://kit.svelte.dev">SvelteKit</Link>
		</p>
		<p class="copyright">Copyright &copy; 2021 <Link href={siteInfo.github}>Nx.Vu</Link></p>
	</div>
</footer>

<style lang="scss">
	@use '../css/responsive' as *;

	footer {
		--color-bg1: var(--color-primary-100);
		--color-bg2: var(--color-primary-000);
		width: 100%;
	}

	footer.dark {
		--color-bg1: var(--color-primary-900);
		--color-bg2: var(--color-primary-1000);
	}

	svg {
		width: 100%;
		display: block;
	}

	.container {
		display: flex;
		flex-flow: column;
		align-items: center;
		background: linear-gradient(90deg, var(--color-bg1) 0%, var(--color-bg2) 100%);
		padding-bottom: var(--spacing-600);

		p {
			margin: 0 0 var(--spacing-200) 0;
			color: var(--color-text-primary-alt);
		}
	}

	.social-links {
		display: flex;
		@include tmp-flex-column-gap(var(--spacing-200));
		margin-bottom: var(--spacing-300);

		a {
			width: 1.75em;
			height: 1.75em;
			transition: border-color 0.3s ease-in-out;
			color: var(--color-text-primary);
			font-size: var(--font-size-600);
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px dashed transparent;
		}
	}

	@include for-tablet-and-desktop {
		.social-links {
			a:hover {
				border-color: var(--color-text-primary);
			}
		}
	}
</style>
