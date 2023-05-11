<script lang="ts" context="module">
	import IconEmail from '~icons/ri/mail-line';
	import IconGithub from '~icons/ri/github-fill';
	import IconLinkedIn from '~icons/ri/linkedin-fill';
	import IconFacebook from '~icons/ri/facebook-fill';
	import siteInfo from '$lib/meta/siteInfo';

	const socials = {
		email: {
			label: 'Email',
			icon: IconEmail,
			href: `mailto:${siteInfo.email}`
		},
		github: {
			label: 'Github',
			icon: IconGithub,
			href: siteInfo.github
		},
		linkedin: {
			label: 'LinkedIn',
			icon: IconLinkedIn,
			href: siteInfo.linkedin
		},
		facebook: {
			label: 'Facebook',
			icon: IconFacebook,
			href: siteInfo.facebook
		}
	};

	type SocialName = 'email' | 'github' | 'linkedin' | 'facebook';
</script>

<script lang="ts">
	import Link from '$lib/ui/Link.svelte';
	export let name: SocialName;
	export let hasLabel: boolean;
	const ins = socials[name];
</script>

{#if hasLabel}
	<span class="text-link">
		<svelte:component this={ins.icon} class="icon pre-icon" />
		<Link href={ins.href}>{ins.label}</Link>
	</span>
{:else}
	<a class="icon-link" href={ins.href} aria-label="Vu's {ins.label}">
		<svelte:component this={ins.icon} />
	</a>
{/if}

<style lang="scss">
	.text-link {
		display: inline-flex;

		:global(.icon) {
			font-size: var(--font-size-600);
		}
	}

	a.icon-link {
		padding: var(--spacing-100);
		color: var(--color-text-primary);
		font-size: var(--font-size-600);
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px dashed transparent;
		border-radius: 50%;
		transition: border-color 0.2s ease-in-out;

		&:hover {
			border-color: var(--color-text-primary);
		}
	}
</style>
