<script lang="ts">
</script>

<div class="profile-card">
	<div class="profile-img">
		<img src="/assets/imgs/avatar.png" alt="avatar" />
	</div>
	<div>Vu Nguyen Xuan</div>
	<div>Full-stuck Developer</div>
	<i class="fab fa-github-square" />
</div>

<style>
	.profile-card {
		width: 100%;
		box-shadow: var(--shadow-outset-200);
		border-radius: var(--border-radius);
		position: relative;
		padding: var(--spacing-400);
		margin-top: 5rem;
		--img-size: 8rem;
		padding-top: calc(var(--img-size) / 1.5);
	}

	.profile-img {
		width: var(--img-size);
		height: var(--img-size);
		border-radius: 50%;
		padding: var(--spacing-100);
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
</style>
