<script lang="ts">
	import SeoTag from '$lib/components/SeoTag.svelte';
	import Card from '$lib/ui/Card.svelte';
	import Link from '$lib/ui/Link.svelte';
	import Tag from '$lib/ui/Tag.svelte';
</script>

<SeoTag title="Résumé" />

<div class="wrapper">
	<Card class="cv-container" article>
		<section class="avatar">
			<img width="128" height="128" src="/assets/imgs/avatar.png" alt="avatar" />
		</section>

		<section class="contact-info">
			<h1>Nguyen <span style="white-space: pre">Xuan Vu</span></h1>
			<p class="role">Web Developer</p>
			<ul class="contact-list">
				<li>
					<i class="fas fa-envelope-square" />
					<Link>Email</Link>
				</li>
				<li>
					<i class="fab fa-github-square" />
					<Link>Github</Link>
				</li>
				<li>
					<i class="fab fa-linkedin" />
					<Link>LinkedIn</Link>
				</li>
				<li>
					<i class="fab fa-facebook-square" />
					<Link>FB</Link>
				</li>
			</ul>
		</section>

		<section class="skills">
			<h3>Skills</h3>
			<div class="entry">
				<ul>
					<li>Design UI/UX.</li>
					<li>Troubleshooting.</li>
					<li>Learn new technology fast.</li>
				</ul>
			</div>
		</section>

		<section class="tech-stack">
			<h3>Tech-Stack</h3>
			<div class="tags">
				<Tag>HTML5</Tag>
				<Tag>SASS</Tag>
				<Tag>NodeJS</Tag>
				<Tag>ReactJS</Tag>
				<Tag>Angular</Tag>
				<Tag>Svelte</Tag>
			</div>
			<div class="tags">
				<Tag>Typescript</Tag>
				<Tag>Go</Tag>
				<Tag>Python</Tag>
				<Tag>Lua</Tag>
			</div>
		</section>

		<section class="experience">
			<h3>Experience</h3>
			<div class="entry">
				<h4 class="company">Goldeneye Technology</h4>
				<p>
					Software Engineer
					<br />
					03 2020 ~ 07 2021
				</p>
				<ul>
					<li>
						Design UI/UX, implemented from scratch Production planning system project, which boosts
						performance of client’s everyday tasks.
					</li>
					<li>Improve the old UI of some legacy projects.</li>
				</ul>
			</div>

			<div class="entry">
				<h4 class="company">Employment Hero</h4>
				<p>
					Software Engineer
					<br />
					06 2018 ~ 02 2019
				</p>
				<ul>
					<li>Maintain and develop features of the company's site.</li>
					<li>Add a bunch of tests, research some automation testing tools.</li>
					<li>Do some stuff about Infrastructure.</li>
				</ul>
			</div>

			<div class="entry">
				<h4 class="company">TMA Solutions</h4>
				<p>
					Intern
					<br />
					07 2017 ~ 12 2017
				</p>
				<ul>
					<li>Research to build a Fraud Detection System, which can detect phishing emails.</li>
					<li>Finish a prototype, which detects phishing mails with accuracy more than 90% .</li>
				</ul>
			</div>
		</section>
		<section class="education">
			<h3>Education</h3>
			<div class="entry">
				<h4>University of Science</h4>
				<p>2014 ~ 2018</p>
				<ul>
					<li>Bachelor of Computer Science</li>
					<li>GPA: 8.1/10</li>
				</ul>
			</div>
		</section>
		<section class="projects ">
			<h3>Projects</h3>
			<div class="entry">
				<h4>Personal Blog</h4>
				<p>Website</p>
				<ul>
					<li>A small project to learn Svelte and learn how to write blogs.</li>
				</ul>
			</div>
			<div class="entry">
				<h4>VN-night</h4>
				<p>Editor</p>
				<ul>
					<li>A Neovim plugin provides a fancy dark colorscheme.</li>
				</ul>
			</div>
		</section>
		<section class="outside-of-work">
			<h3>Outside of work</h3>
			<div class="entry">
				<ul>
					<li>I recently started my blog website, where I write about my learning.</li>
					<li>I’m a CFA candidate, who like to research about financial stuff (gambling)</li>
					<li>
						Swimming is my favorite sport. I like to just relax and do nothing on water, it feels
						like flying.
					</li>
					<li>I’m also a 10-years Starcraft player. Please connect to play with me :)</li>
				</ul>
			</div>
		</section>
	</Card>
</div>

<style lang="scss">
	@use '../lib/css/utils.scss' as *;

	.wrapper :global(.cv-container) {
		width: 100%;
		margin-top: var(--spacing-600);
		--color-text-highlight: var(--color-primary-500);
	}

	h1,
	.role,
	.avatar {
		text-align: center;
	}

	section {
		margin-bottom: var(--spacing-600);
		text-align: left;

		h3 {
			position: relative;
			margin-bottom: var(--spacing-400);

			&::before {
				position: absolute;
				left: 0;
				bottom: 0;
				width: 8em;
				height: 2px;
				content: '';
				background-color: var(--color-text-highlight);
				border-radius: 10px;
			}
		}

		.entry {
			margin-bottom: var(--spacing-400);

			h4 {
				color: var(--color-text-highlight);
			}
			p {
				margin: var(--spacing-200) 0;
				font-size: var(--font-size-300);
				color: var(--color-text-alt);
				display: block;
			}
			ul {
				margin: 0;
				padding-left: var(--spacing-500);
			}
		}

		.tags {
			display: flex;
			flex-wrap: wrap;
			@include tmp-flex-column-row-gap(var(--spacing-200));
		}
	}

	h1 {
		color: var(--color-text-highlight);
	}

	.avatar {
		img {
			border-radius: 50%;
			border: 4px solid var(--color-text-highlight);
		}
	}

	.contact-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0;
		width: fit-content;
		margin: 0 auto;

		li {
			list-style-type: none;
			width: 96px;
			margin-bottom: var(--spacing-200); /* no use 'gap' here since its not support on safari */
			margin-right: var(--spacing-300);
			display: flex;
			align-items: center;

			i {
				font-size: var(--font-size-600);
				margin-right: var(--spacing-200);
				color: var(--color-text-highlight);
			}
		}
	}

	@include for-desktop {
		.wrapper :global(.cv-container) {
			--color-text-highlight: var(--color-primary-500);
			display: grid;
			grid-template-columns: 0.2fr 2fr 1fr 0.2fr;
			column-gap: var(--spacing-600);
			grid-template-areas:
				'. contact-info avatar .'
				'. experience skills .'
				'. experience tech-stack .'
				'. experience education .'
				'. projects outside-of-work .';
		}

		section {
			&.avatar {
				grid-area: avatar;
			}
			&.contact-info {
				grid-area: contact-info;
			}
			&.skills {
				grid-area: skills;
			}
			&.tech-stack {
				grid-area: tech-stack;
			}
			&.experience {
				grid-area: experience;
			}
			&.education {
				grid-area: education;
			}
			&.projects {
				grid-area: projects;
			}
			&.outside-of-work {
				grid-area: outside-of-work;
			}
		}
	}
</style>
