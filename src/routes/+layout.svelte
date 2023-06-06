<script>
	import "./styles.css";
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		align-items: center;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-height: 100vh;
		max-width: min(64rem, calc(100% - 2rem));
		box-sizing: border-box;
	}
</style>
