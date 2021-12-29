<div class="background-container">
	<svg
		viewBox="0 0 800 88.7"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none"
		shape-rendering="auto"
	>
		<defs>
			<path
				id="wave-pattern"
				fill="var(--color-main-bg)"
				d="M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z"
			/>
		</defs>

		<g class="wave-group-0">
			<use href="#wave-pattern" y="20" />
			<use href="#wave-pattern" x="-100%" y="20" />
		</g>
		<g class="wave-group-1" fill-opacity="0.7">
			<use href="#wave-pattern" y="10" />
			<use href="#wave-pattern" x="-100%" y="10" />
		</g>
		<g class="wave-group-2" fill-opacity="0.6">
			<use href="#wave-pattern" />
			<use href="#wave-pattern" x="-100%" />
		</g>
	</svg>
</div>

<style lang="scss">
	@use '../css/responsive.scss' as *;

	.background-container {
		position: absolute;
		top: 0;
		left: 0;
		height: 460px;
		width: 100%;
		background: linear-gradient(45deg, var(--color-bg1) 0%, var(--color-bg2) 100%);
		z-index: -1;
	}

	svg {
		position: absolute;
		bottom: -2px;
		min-height: 64px;
		max-height: 144px;
		width: 100%;

		* {
			max-height: 144px;
		}
	}

	.wave-group-0 {
		animation: wave 8s linear infinite;
		z-index: 1;
	}

	.wave-group-1 {
		animation: wave 13s linear reverse infinite;
		z-index: 0;
	}

	.wave-group-2 {
		animation: wave 21s linear infinite;
		z-index: 0;
	}

	@keyframes wave {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100%);
		}
	}

	@include for-tablet-and-desktop {
		.background-container {
			height: 512px;
		}
	}
</style>
