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
</script>

<style>
</style>
