<script lang="ts">
	import IconCheck from '~icons/ri/check-line';
	import IconCross from '~icons/ri/close-line';
</script>

<div class="demo-btns">
	<div>
		<IconCross class="status" color="red" />
		<div class="btn" style="background: var(--color-primary-200)">Noice</div>
	</div>
	<div>
		<IconCheck class="status" color="green" />
		<div class="btn" style="background: var(--color-primary-500)">Nice</div>
	</div>
	<div>
		<IconCross class="status" color="red" />
		<div class="btn" style="background: var(--color-primary-900)">Noice</div>
	</div>
</div>

<style lang="scss">
	@use '../../../css/utils.scss' as *;

	.demo-btns {
		display: flex;
		overflow: auto;
		@include tmp-flex-column-gap(var(--spacing-400));

		& > * {
			text-align: center;
		}

		:global(.status) {
			font-size: var(--font-size-600);
		}

		.btn {
			width: 100px;
			padding: var(--spacing-200) 0;
			border: 1px solid var(--color-grey-400);
			border-radius: var(--border-radius);
			font-weight: bold;
			color: var(--color-white);
			text-align: center;
		}
	}
</style>
