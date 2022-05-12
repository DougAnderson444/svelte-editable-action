<script lang="ts">
	// import '../app.css';
</script>

<main>
	<slot />
</main>

<footer>
	<p>
		visit <a href="https://https://github.com/DougAnderson444/svelte-editable-action"
			>github.com/DougAnderson444/svelte-editable-action</a
		> to learn more
	</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
